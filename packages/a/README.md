# @inkdes-email/a

Anchor for email components
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
pnpm add @inkdes-email/a

# npm
npm install @inkdes-email/a

# yarn
yarn add @inkdes-email/a
```

## Quick start

```tsx
import { A } from "@inkdes-email/a";

export default function EmailTemplate() {
  return <>
      <A href='#' color='blue'>Docs</A>
  </>
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | any | No |  |  |
| color | string | No |  | Hex color |
| noDecoration | boolean | No | false |  |
| style | React.CSSProperties | No | |  |
| rel | string | No |'noopener noreferrer' |  |


## License

MIT © iClasser
