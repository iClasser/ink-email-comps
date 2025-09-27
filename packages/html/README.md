# inkdes-email-comps/html

HTML root wrapper for your email documents.

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add ink-email-comps/html

# npm
npm install ink-email-comps/html

# yarn
yarn add ink-email-comps/html
```

## Quick start

```tsx
import { Html } from "ink-email-comps/html";

export default function Email() {
  return <Html>Hello</Html>;
}
```

## Props

| Name     | Type                   | Required | Default | Description                         |
| -------- | ---------------------- | -------- | ------- | ----------------------------------- |
| children | React.ReactNode        | Yes      | —       | Content of the email document       |
| dir      | "ltr" \| "rtl"          | No       | "ltr"   | Text direction for the document     |
| lang     | string                 | No       | "en"    | Language of the document            |

All other standard HTML attributes for the `<html>` element are supported.

## License

MIT © iClasser
