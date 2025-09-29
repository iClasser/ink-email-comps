# @inkdes-email/font

Font component used inside <Head> tag.

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @inkdes-email/font

# npm
npm install @inkdes-email/font

# yarn
yarn add @inkdes-email/font
```

## Quick start

```tsx
import { Font } from "@inkdes-email/font";

export default function EmailTemplate() {
  return <Font 
            family='Inter'
            url='https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZJhiJ-Ek-_EeAmM.woff2'
            type='woff2'
            fallback='Arial'
            style='normal'
            weight='400'
            targetClasses={['class1']}
            targetTags={['body']}
          />
}
```

## Props

| Name     | Type                   | Required | Default | Description                         |
| -------- | ---------------------- | -------- | ------- | ----------------------------------- |
| children | React.ReactNode        | Yes      | —       | Content of the email document       |
| family | String        | Yes      | —       | -       |
| url | String        | Yes      | —       | -       |
| type | String        | Yes      | —       | "woff2" or "woff"       |
| style | String        | Yes      | —       | -       |
| weigth | String        | Yes      | —       | 400       |
| targetClasses | Array of strings        | No      | —       |        |
| targetTags | Array of strings        | No      | —       |        |

All other standard Head attributes for the `<head>` element are supported.

## License

MIT © iClasser
