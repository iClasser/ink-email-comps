# @inkdes-email/text

Body wrapper for your email layout.

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @inkdes-email/text

# npm
npm install @inkdes-email/text

# yarn
yarn add @inkdes-email/text
```

## Quick start

```tsx
import { Body } from "@inkdes-email/text";

export default function EmailTemplate() {
  return <Text spacingBottom='10px' fontWeight='400' fontFamily='Arial' fontSize='20px'>
  Hello world!
  </Text>;
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes      | —       | Content of the email document |
| fontColor | string | No      | —       |  |
| fontSize | string | No      | —       |  |
| fontWeight | string | No      | —       |  |
| className | string | No      | —       |  |
| spacingBottom | string | No      | —       |  |

All other standard attributes for the `<body>` element are supported.

## License

MIT © iClasser
