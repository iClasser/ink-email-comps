# @inkdes-email/head

Head wrapper for your email documents.

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add  @inkdes-email/head

# npm
npm install  @inkdes-email/head

# yarn
yarn add  @inkdes-email/head
```

## Quick start

```tsx
import { Head } from " @inkdes-email/head";

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
