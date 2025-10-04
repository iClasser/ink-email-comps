# @inkdes-email/img
Image component for email.
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
pnpm add @inkdes-email/img

# npm
npm install @inkdes-email/img

# yarn
yarn add @inkdes-email/img
```

## Quick start

```tsx
import { Img } from "@inkdes-email/img";

export default function Email() {
  return <Img src="cat.jpg" alt="Cat" width={300} height={300} />;
}
```

## Alignment & styling

```tsx
<Img
  src="banner.png"
  alt="Banner"
  width={600}
  center
  direction="ltr"
  borderRadius="8px"
  outerSpacing="16px 0"
/>
```

## Props

| Name         | Type                 | Required | Default | Description                                        |
| ------------ | -------------------- | -------- | ------- | -------------------------------------------------- |
| src          | string               | Yes      | ""      | Path or URL to the image                           |
| alt          | string               | No       | ""      | Alternate description for the image                |
| width        | number \| string     | No       | —       | Image width. Numbers are treated as px in style    |
| height       | number \| string     | No       | —       | Image height. Numbers are treated as px in style   |
| center       | boolean              | No       | false   | Centers the image within the table cell            |
| direction    | "ltr" \| "rtl"       | No       | "ltr"   | Text direction for the wrapper cell                |
| borderRadius | string               | No       | —       | Applied as CSS border-radius on the image          |
| outerSpacing | string               | No       | —       | Padding applied to the wrapper cell (e.g. "16px 0") |
| style | React.CSSProperties               | No       | —       |  |

## License

MIT © iClasser


