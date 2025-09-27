#!/usr/bin/env node
/**
 * tools/create-component.js
 * Scaffolds @inkdes-email-comps/<name> in /packages with lowercase files,
 * PascalCase component, and README props table populated from input.
 */

const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

const ROOT = process.cwd();
const PACKAGES_DIR = path.join(ROOT, "packages");

// ---- helpers ----
const toKebab = (str) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

const toPascal = (str) =>
  String(str)
    .replace(/(^\w|[\s-_]\w)/g, (m) => m.replace(/[\s-_]/, "").toUpperCase())
    .replace(/[^A-Za-z0-9]/g, "")
    .replace(/^\d+/, ""); // avoid leading digits

const ensureDir = (p) => fs.mkdirSync(p, { recursive: true });
const write = (p, c) => fs.writeFileSync(p, c);
const exists = (p) => fs.existsSync(p);

const parseProps = (input) => {
  // "title:string, isOpen?:boolean"
  if (!input || !input.trim()) return [];
  return input
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((pair) => {
      let [rawName, rawType] = pair.split(":").map((x) => (x || "").trim());
      if (!rawName) return null;
      let optional = false;
      if (rawName.endsWith("?")) {
        optional = true;
        rawName = rawName.slice(0, -1);
      }
      const name = rawName;
      const type = rawType || "string";
      return { name, type, optional };
    })
    .filter(Boolean);
};

const prompt = async (q, def = "") => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ans = await new Promise((res) => rl.question(def ? `${q} (${def}): ` : `${q}: `, res));
  rl.close();
  return ans || def;
};

// ---- templates ----
const makeTsconfig = () =>
  JSON.stringify(
    {
      // This path assumes tsconfig/* exists at repo root; adjust if needed.
      extends: "../../tsconfig/react-library.json",
      include: ["."],
      exclude: ["dist", "build", "node_modules"],
    },
    null,
    2
  );

const makePackageJson = (kebabName) =>
  JSON.stringify(
    {
      name: `@inkdes-email-comps/${kebabName}`,
      version: "0.0.0",
      description: "A React email head component to wrap emails (InkDes Mailer)",
      sideEffects: false,
      main: "./dist/index.js",
      module: "./dist/index.mjs",
      types: "./dist/index.d.ts",
      files: ["dist/**"],
      exports: {
        ".": {
          import: { types: "./dist/index.d.mts", default: "./dist/index.mjs" },
          require: { types: "./dist/index.d.ts", default: "./dist/index.js" },
        },
      },
      license: "MIT",
      scripts: {
        build: "tsdown src/index.ts --format esm,cjs --dts --external react",
        "build:watch": "tsdown src/index.ts --format esm,cjs --dts --external react --watch",
        clean: "rm -rf dist",
        test: "vitest run",
        "test:watch": "vitest",
      },
      repository: {
        type: "git",
        url: "https://github.com/iClasser/inkdes-email-comps",
        directory: `packages/${kebabName}`,
      },
      keywords: [
        "react",
        "email",
        "email-notification",
        "react-email-component",
        "react-email",
        "send-email",
        "email-component",
        "inkdes-mailer",
        "inkdes-email-comps",
        "inkdes",
      ],
      engines: { node: ">=18.0.0" },
      peerDependencies: { react: "^18.0 || ^19.0 || ^19.0.0-rc" },
      devDependencies: {
        tsconfig: "workspace:*",
        typescript: "5.8.3",
      },
      publishConfig: { access: "public" },
    },
    null,
    2
  );

const makeChangelog = (kebabName) =>
  `# inkdes-email-comps/${kebabName}

## 0.0.1
- Initialized email comp
`;

const makePropsTable = (extraProps) => {
  const rows = [
    "| Name     | Type            | Required | Default | Description |",
    "| -------- | --------------- | -------- | ------- | ----------- |",
    "| children | React.ReactNode | Yes      | —       | Content of the email document |",
  ];
  for (const p of extraProps) {
    rows.push(
      `| ${p.name} | ${p.type} | ${p.optional ? "No" : "Yes"} | — | — |`
    );
  }
  return rows.join("\n");
};

const makeReadme = (kebabName, componentName, extraProps, htmlBase) =>
  `# inkdes-email-comps/${kebabName}

${componentName} wrapper for your email ${htmlBase === "head" ? "documents" : "layout"}.

## Installation

\`\`\`bash
# pnpm
pnpm add ink-email-comps/${kebabName}

# npm
npm install ink-email-comps/${kebabName}

# yarn
yarn add ink-email-comps/${kebabName}
\`\`\`

## Quick start

\`\`\`tsx
import { ${componentName} } from "ink-email-comps";

export default function EmailTemplate() {
  return <${componentName}>
    <title>Some title</title>
  </${componentName}>;
}
\`\`\`

## Props

${makePropsTable(extraProps)}

${
  htmlBase === "head"
    ? "All other standard attributes for the `<head>` element are supported."
    : `All other standard attributes for the \`<${htmlBase}>\` element are supported.`
}

## License

MIT © iClasser
`;

const makeIndexTs = (lowerFileBase, componentName) =>
  `export { ${componentName} } from "./${lowerFileBase}";\n`;

const makeComponentTsx = (lowerFileBase, componentName, htmlBase, extraProps) => {
  const extraLines = extraProps.map((p) => `  ${p.name}${p.optional ? "?" : ""}: ${p.type};`).join("\n");
  const destructured = extraProps.length
    ? extraProps.map((p) => `  ${p.name},`).join("\n")
    : "";

  const titleLine =
    htmlBase === "head" && extraProps.some((p) => p.name === "title")
      ? `      {typeof title !== "undefined" && <title>{String(title)}</title>}\n`
      : "";

  const metaHead =
    htmlBase === "head"
      ? `      {/* email metadata */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <meta name="x-apple-disable-message-reformatting" />\n`
      : "";

  return `import * as React from "react";

export interface ${componentName}Props extends React.ComponentPropsWithoutRef<"${htmlBase}"> {
  children: React.ReactNode;
${extraLines ? extraLines + "\n" : ""}}

export const ${componentName}: React.FC<${componentName}Props> = ({
  children,
${destructured}}) => {
  return (
    <${htmlBase}>
${metaHead}${titleLine}      {children}
    </${htmlBase}>
  );
};

${componentName}.displayName = '${componentName}';
`;
};

// ---- main ----
(async () => {
  try {
    // Prompts
    const nameInput = await prompt("Component name (PascalCase)", "Head");
    const componentName = toPascal(nameInput);
    if (!componentName || !/^[A-Z][A-Za-z0-9]*$/.test(componentName)) {
      console.error("✖ Component name must be PascalCase (e.g., Head, EmailWrapper).");
      process.exit(1);
    }

    const defaultFolder = toKebab(componentName); // lowercase
    const folder = toKebab(await prompt("Package folder name (kebab-case)", defaultFolder));
    const htmlBase = (await prompt('HTML element to extend', 'head')).trim() || "head";
    const extra = await prompt(
      'Extra props (comma sep "name:type", optional with "?"; e.g. "title:string, isOpen?:boolean")',
      "title:string"
    );
    const extraProps = parseProps(extra);

    // Paths
    const pkgDir = path.join(PACKAGES_DIR, folder);
    if (exists(pkgDir)) {
      console.error(`✖ Package already exists: ${pkgDir}`);
      process.exit(1);
    }

    const srcDir = path.join(pkgDir, "src");
    const lowerFileBase = folder; // lowercase file base (e.g., "head")
    ensureDir(srcDir);

    // Files
    write(path.join(pkgDir, "tsconfig.json"), makeTsconfig());
    write(path.join(pkgDir, "package.json"), makePackageJson(folder));
    write(path.join(pkgDir, "CHANGELOG.md"), makeChangelog(folder));
    write(path.join(pkgDir, "README.md"), makeReadme(folder, componentName, extraProps, htmlBase));
    write(path.join(srcDir, "index.ts"), makeIndexTs(lowerFileBase, componentName));
    write(
      path.join(srcDir, `${lowerFileBase}.tsx`),
      makeComponentTsx(lowerFileBase, componentName, htmlBase, extraProps)
    );

    console.log(`✅ Created @inkdes-email-comps/${folder} at ${pkgDir}`);
    console.log(`   Files:
     - tsconfig.json
     - package.json
     - README.md (props table populated)
     - CHANGELOG.md
     - src/index.ts (exports ${componentName} from "./${lowerFileBase}")
     - src/${lowerFileBase}.tsx (${componentName} component)
`);
    console.log(`   Next:
     pnpm -C packages/${folder} build
     pnpm run gen:ink   # (to refresh your aggregator)
     pnpm changeset
     pnpm changeset version && git add -A && git commit -m "feat: add ${folder}" && git push
     pnpm changeset publish
`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
