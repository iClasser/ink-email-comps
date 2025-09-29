# @inkdes-email/components
InkDes react email components library. You can create emails with these components well tested for email compatibility.
<br />


<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @inkdes-email/components

# npm
npm install @inkdes-email/components

# yarn
yarn add @inkdes-email/components
```

## Quick start

```tsx
import { Html, Head, Font, Body, Img, Button } from "@inkdes-email/components";

export default function EmailTemplate() {
  return <Html>
    <Head>
      <Font 
        family='Inter'
        url='https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZJhiJ-Ek-_EeAmM.woff2'
        type='woff2'
        fallback='Arial'
        style='normal'
        weight='400'
        targetClasses={[]}
        targetTags={['html', 'body']}
      />
      <title>Platform name</title>
    </Head>
    <Body previewText='Some preview pre-header text.' width={376} padding='20px 20px' outerBgColor='#fff' backgroundColor='#dedede'>
      <Img src="cat.jpg" alt="Cat" width={300} height={300} borderRadius='20px' />;
      <Button text='Confirm' backgroundColor='#000' textColor='#fff' />
    </Body>
  </Html>
}
```


## Support

This component was tested using the most popular email clients.

## License

MIT © iClasser


