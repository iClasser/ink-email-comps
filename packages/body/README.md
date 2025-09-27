# inkdes-email-comps/body

Body wrapper for your email layout.

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add ink-email-comps/body

# npm
npm install ink-email-comps/body

# yarn
yarn add ink-email-comps/body
```

## Quick start

```tsx
import { Body } from "ink-email-comps";

export default function EmailTemplate() {
  return <Body>
    <title>Some title</title>
  </Body>;
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes      | —       | Content of the email document |
| background | string | Yes | — | — |
| backgroundColor | string | Yes | — | — |
| style | React.CSSProperties | No | - | - |
| width | number or "100%" | No | — | width of container |
| padding | string | No | `12px 20px` | inner padding |
| outerBgColor | string | No | — | When whidth is not `100%` and a number, you can set this value as Hex color value to set the left and right side of the section background color, not the inside |

All other standard attributes for the `<body>` element are supported.

## License

MIT © iClasser
