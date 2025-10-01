# @inkdes-email/components
InkDes react email components library. You can create emails with these components well tested for email compatibility.
<br />
<img width="512" height="512" alt="inkdes-logo" src="https://github.com/user-attachments/assets/8e885609-d2bb-46ab-a760-ae896757ff60" />


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
pnpm add @inkdes-email/components

# npm
npm install @inkdes-email/components

# yarn
yarn add @inkdes-email/components
```

## Quick start

```tsx
import { Html, Head, Font, Body, Img, Text, Card, Button } from "@inkdes-email/components";

export default function EmailTemplate() {
  return <Html>
  <Head>
    <Font 
      family='Trirong'
      url='https://fonts.gstatic.com/s/trirong/v17/7r3GqXNgp8wxdOdOn58o2IRj6unHgw.woff2'
      format='woff2'
      fallback='Arial'
      style='normal'
      weight='400'
      targetClasses={[]}
      targetTags={['html', 'body', 'button']}
    />
    <title>Platform name</title>
  </Head>
  <Body previewText='Some preview pre-header text.' width={376} padding='20px 20px' outerBgColor='#fff' backgroundColor='#dedede'>
    <Img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/chromium/chromium_48x48.png" alt="Cat" width={48} height={48} borderRadius='100%' />;
    <Text fontSize='14px' fontWeight='400' textColor='#000'>Hello world!</Text>
    <Card 
        header={<Text>Some header</Text>}
        content={<Text>Some content</Text>}
        footer={<Text>Some footer</Text>}
        headerBackgroundColor='#fff'
        contentBackgroundColor='#fff'
        footerBackgroundColor='#fff'
        borderRadius='24px' 
        padding='12px 15px'
        width='100%'
        outerSpacing='0px 20px' 
     />
    <Button align='center' href='#' text='Confirm' backgroundColor='#000' textColor='#fff' />
  </Body>
</Html>
}
```

## Components

 - <a href='https://github.com/iClasser/inkdes-email-comps/tree/canary/packages/html'>Html</a>
 - <a href='https://github.com/iClasser/inkdes-email-comps/tree/canary/packages/head'>Head</a>
 - <a href='https://github.com/iClasser/inkdes-email-comps/tree/canary/packages/font'>Font</a>
 - <a href='https://github.com/iClasser/inkdes-email-comps/tree/canary/packages/body'>Body</a>
 - <a href='https://github.com/iClasser/inkdes-email-comps/tree/canary/packages/body-contents'>BodyContents</a>
 - <a href='https://github.com/iClasser/inkdes-email-comps/tree/canary/packages/button'>Button</a>
 - <a href='https://github.com/iClasser/inkdes-email-comps/tree/canary/packages/img'>Img</a>
 - <a href='https://github.com/iClasser/inkdes-email-comps/tree/canary/packages/text'>Text</a>
 - <a href='https://github.com/iClasser/inkdes-email-comps/tree/canary/packages/card'>Card</a>

## Support

This component was tested using the most popular email clients.

## License

MIT © iClasser


