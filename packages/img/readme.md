# inkdes-email-comps/img
Display an image in your email.
<br />


<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add inkdes-email-comps/img

# npm
npm install inkdes-email-comps/img

# yarn
yarn add inkdes-email-comps/img
```

## Quick start

```tsx
import { Img } from "inkdes-email-comps/img";

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

## License

MIT © iClasser


