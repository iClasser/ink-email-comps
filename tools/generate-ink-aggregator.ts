// tools/generate-ink-aggregator.ts
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PKGS_DIR = path.join(ROOT, "packages");
const AGG_NAME = "inkdes-email-comps";           // <— the published aggregator name
const AGG_DIR = path.join(PKGS_DIR, AGG_NAME);
const SRC_DIR = path.join(AGG_DIR, "src");

function shortAlias(pkgName: string) {
  // turns @inkdes-email-comps/html -> html
  const m = pkgName.match(/^@inkdes-email-comps\/(.+)$/);
  return m ? m[1].replace(/[@/]/g, "-") : pkgName.replace(/[@/]/g, "-");
}

function isInkScoped(pkgJson: any) {
  return typeof pkgJson?.name === "string" && pkgJson.name.startsWith("@inkdes-email-comps/");
}

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

function writeFile(p: string, content: string) {
  fs.writeFileSync(p, content);
}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function main() {
  // 1) discover packages
  const entries = fs.readdirSync(PKGS_DIR, { withFileTypes: true });
  const leafPkgs: { dir: string; pkg: any }[] = [];

  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (e.name === AGG_NAME) continue; // skip aggregator itself
    const pkgJsonPath = path.join(PKGS_DIR, e.name, "package.json");
    if (!fs.existsSync(pkgJsonPath)) continue;
    const pkgJson = readJson(pkgJsonPath);
    if (isInkScoped(pkgJson) && !pkgJson.private) {
      leafPkgs.push({ dir: path.join(PKGS_DIR, e.name), pkg: pkgJson });
    }
  }

  if (leafPkgs.length === 0) {
    console.error("No @inkdes-email-comps/* public packages found.");
    process.exit(1);
  }

  // 2) prepare aggregator dirs
  ensureDir(SRC_DIR);

  // 3) generate src files:
  //   - index.ts (namespaced re-exports)
  //   - one file per leaf for subpath forwarding
  const nsLines: string[] = [];
  const subpaths: Record<string, { import: string; require: string; types: string }> = {};

  for (const { pkg } of leafPkgs) {
    const name: string = pkg.name; // e.g., @inkdes-email-comps/html
    const alias = shortAlias(name); // e.g., html

    // convert xyz-xyz to xyzXyz
    const camelCaseAlias = camelize(alias);

    // index.ts: export * as html from '@inkdes-email-comps/html'
    nsLines.push(`export * as ${camelCaseAlias} from "${name}";`);

    // subpath forwarding file: src/html.ts
    const fwd = `export * from "${name}";\n`;
    writeFile(path.join(SRC_DIR, `${alias}.ts`), fwd);

    // export map entries for "./html"
    subpaths[`./${alias}`] = {
      import: `./dist/${alias}.mjs`,
      require: `./dist/${alias}.js`,
      types: `./dist/${alias}.d.ts`,
    };
  }

  writeFile(path.join(SRC_DIR, "index.ts"), nsLines.join("\n") + "\n");

  // 4) create/update package.json for aggregator
  const aggPkgJsonPath = path.join(AGG_DIR, "package.json");
  const basePkg = fs.existsSync(aggPkgJsonPath) ? readJson(aggPkgJsonPath) : {};

  const exportsField: any = {
    ".": {
      import: "./dist/index.mjs",
      require: "./dist/index.js",
      types: "./dist/index.d.ts",
    },
    ...Object.fromEntries(
      Object.entries(subpaths).map(([k, v]) => [
        k,
        { import: v.import, require: v.require, types: v.types },
      ])
    ),
  };

  const deps = basePkg.dependencies ?? {};
  for (const { pkg } of leafPkgs) {
    // pin to current version; use ^ if you prefer
    deps[pkg.name] = "workspace:*";
  }

  const aggPkg = {
    name: AGG_NAME,
    version: basePkg.version ?? "0.0.0",
    description: "All InkDes email components in one package",
    sideEffects: false,
    main: "./dist/index.js",
    module: "./dist/index.mjs",
    types: "./dist/index.d.ts",
    files: ["dist/**"],
    exports: exportsField,
    license: "MIT",
    scripts: {
      ...(basePkg.scripts ?? {}),
      build:
        'tsdown src/index.ts --format esm,cjs --dts && ' +
        // build all forwarders too
        `tsdown ${Object.keys(subpaths)
          .map((k) => `src/${k.slice(2)}.ts`)
          .join(" ")} --format esm,cjs --dts`,
      "build:watch":
        'tsdown src/index.ts --format esm,cjs --dts --watch',
      clean: "rm -rf dist",
      test: "vitest run",
      "test:watch": "vitest",
    },
    repository: {
      type: "git",
      url: "https://github.com/iClasser/inkdes-email-comps",
      directory: "packages/inkdes-email-comps",
    },
    keywords: ["react", "email", "inkdes", "inkdes-email-comps"],
    engines: { node: ">=18.0.0" },
    peerDependencies: {
      react: "^18.0 || ^19.0 || ^19.0.0-rc",
    },
    devDependencies: {
      ...(basePkg.devDependencies ?? {}),
      typescript: basePkg.devDependencies?.typescript ?? "5.8.3",
      tsconfig: "workspace:*",
    },
    dependencies: deps,
    publishConfig: { access: "public" },
  };

  writeFile(aggPkgJsonPath, JSON.stringify(aggPkg, null, 2));

  // 5) minimal tsconfig
  const tsconfigPath = path.join(AGG_DIR, "tsconfig.json");
  if (!fs.existsSync(tsconfigPath)) {
    writeFile(
      tsconfigPath,
      JSON.stringify(
        {
          extends: "../../tsconfig/base.json",
          include: ["src"],
        },
        null,
        2
      )
    );
  }

  console.log(`Generated aggregator at ${AGG_DIR}`);
}

main();
