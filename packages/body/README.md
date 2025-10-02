# @inkdes-email/body

Body wrapper for your email layout.
<br />
<br />
<img width="80" height="80" alt="inkdes-logo" src="https://github.com/user-attachments/assets/8e885609-d2bb-46ab-a760-ae896757ff60" />
<br />

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>


<div style='text-align:center'>
  <a href='https://www.npmjs.com/package/@inkdes-email/components'>NPM package<a>
  </hr>
</div>


<div style='text-align:center'>
  <a href='https://inkdes.com'>Website<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @inkdes-email/body

# npm
npm install @inkdes-email/body

# yarn
yarn add @inkdes-email/body
```

## Quick start

```tsx
import { Body } from "@inkdes-email/body";

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
