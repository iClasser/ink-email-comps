# @inkdes-email/html

HTML root wrapper for your email documents.

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @inkdes-email/html

# npm
npm install @inkdes-email/html

# yarn
yarn add @inkdes-email/html
```

## Quick start

```tsx
import { Html } from "@inkdes-email/html";

export default function Email() {
  return <Html>Hello</Html>;
}
```

## Props

| Name     | Type                   | Required | Default | Description                         |
| -------- | ---------------------- | -------- | ------- | ----------------------------------- |
| children | any        | Yes      | —       | Content of the email document       |
| dir      | "ltr" \| "rtl"          | No       | "ltr"   | Text direction for the document     |
| lang     | string                 | No       | "en"    | Language of the document            |

All other standard HTML attributes for the `<html>` element are supported.

## License

MIT © iClasser
