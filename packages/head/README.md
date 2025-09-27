# inkdes-email-comps/head

Head wrapper for your email documents.

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add ink-email-comps/head

# npm
npm install ink-email-comps/head

# yarn
yarn add ink-email-comps/head
```

## Quick start

```tsx
import { Head } from "ink-email-comps";

export default function EmailTemplate() {
  return <Head>
    <title>Some title</title>
  </Head>;
}
```

## Props

| Name     | Type                   | Required | Default | Description                         |
| -------- | ---------------------- | -------- | ------- | ----------------------------------- |
| children | React.ReactNode        | Yes      | —       | Content of the email document       |
| title | React.ReactNode        | No      | —       | Title       |
| defaultCss | string        | No      | Pre-written CSS for email       | You can replace this with your own css       |


All other standard Head attributes for the `<head>` element are supported.

## License

MIT © iClasser
