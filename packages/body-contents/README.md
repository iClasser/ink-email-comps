# @inkdes-email/body-contents

Wrapper for your email layout.

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @inkdes-email/body-contents

# npm
npm install @inkdes-email/body-contents

# yarn
yarn add @inkdes-email/body-contents
```

## Quick start

```tsx
import { BodyContent } from "@inkdes-email/body-contents";

export default function EmailTemplate() {
  return <>
      <BodyContent>
          <title>Header</title>
      </BodyContent>

      <BodyContent>
          <title>Body</title>
      </BodyContent>

      <BodyContent>
          <title>Footer</title>
      </BodyContent>
  </>
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

## License

MIT © iClasser
