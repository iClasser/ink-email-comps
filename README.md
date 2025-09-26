# inkdes-email-comps
InkDes react email components library. You can create emails with these components well tested for email compatibility.
<br />

<div style="text-align:center">
  <a href="https://inkdes.com" target="_blank">InkDes.com Website</a>
</div>

## Installation

```bash
# pnpm
pnpm add inkdes-email-comps

# npm
npm install inkdes-email-comps

# yarn
yarn add inkdes-email-comps
```

## Quick start

```tsx
import { Html, Img } from "inkdes-email-comps";

export default function EmailTemplate() {
  return <Html>
    <Img src="cat.jpg" alt="Cat" width={300} height={300} />;
  </Html>
}
```

## License

MIT © iClasser


