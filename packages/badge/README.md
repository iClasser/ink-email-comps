# @inkdes-email/badge

Badge component for email.
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
pnpm add @inkdes-email/badge

# npm
npm install @inkdes-email/badge

# yarn
yarn add @inkdes-email/badge
```

## Quick start

```tsx
import { Badge } from "@inkdes-email/badge";

export default function EmailTemplate() {
  return <>
      <Badge varient='default'>
        <span>Text</span>
     </Badge>
  </>
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | React.ReactNode | string | Yes      | —       | - |
| varient | string | No | `default` | — |
| padding | string | No | `6px 8px` | inside padding |
| spacing | string | No | `0px 0px 20px 0px` | outside spacing |
| noPadding | boolean | No | false | — |


## License

MIT © iClasser
