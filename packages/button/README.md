# @inkdes-email/button
Button component for email.
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
| outerSpacing          | string               | No       |   "0px 0px 20px 0px"    |              |
| style          | string               | No       |       |  CSS style            |


## License

MIT © iClasser


