# inkdes-email-comps
InkDes email library.
<br />

## Installation

```bash
# pnpm
pnpm add inkdes-email-comps -E

# npm
npm install inkdes-email-comps -E

# yarn
yarn add inkdes-email-comps -E
```

## Quick start

```tsx
import { Html, Img } from "inkdes-email-comps";

export default function Email() {
  return <Html>
  <Img src="cat.jpg" alt="Cat" width={300} height={300} />;
  </Html>
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

## License

MIT © iClasser


