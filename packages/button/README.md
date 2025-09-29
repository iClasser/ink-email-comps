# @inkdes-email/button
Display an button in your email.
<br />


<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @inkdes-email/button

# npm
npm install @inkdes-email/button

# yarn
yarn add @inkdes-email/button
```

## Quick start

```tsx
import { Button } from "@inkdes-email/button";

<Button
 text='Submit'
 href='https://example.com'
 backgroundColor='#000'
 textColor='#ffff'
 borderRadius='20px'
 style={{
  paddingBottom: '20px'
 }}
/>
```

## Props

| Name         | Type                 | Required | Default | Description                                        |
| ------------ | -------------------- | -------- | ------- | -------------------------------------------------- |
| src          | string               | Yes      | ""      | Path or URL to the image                           |
| text          | string               | Yes       | ""      |                |
| href          | string               | Yes       | ""      |                |
| icon          | object               | No       |       |   { url, alt, width, height }             |
| backgroundColor          | string               | Yes       | ""      |                |
| align          | string               | No       | "center"      |                |
| direction          | string               | No       | "ltr"      |                |
| textColor          | string               | No       |       |   css color hex             |
| borderRadius          | string               | No       |       |              |
| outerSpacing          | string               | No       |       |              |
| style          | string               | No       |       |  CSS style            |


## License

MIT © iClasser


