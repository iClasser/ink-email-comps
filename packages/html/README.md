# ink-email-comps/html

HTML root wrapper for your email documents.

## Installation

```bash
# pnpm
pnpm add ink-email-comps/html -E

# npm
npm install ink-email-comps/html -E

# yarn
yarn add ink-email-comps/html -E
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
