# @inkdes-email/card

Wrapper for your email layout.

<div style='text-align:center'>
  <a href='https://github.com/iClasser/inkdes-email-comps'>GitHub<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @inkdes-email/card

# npm
npm install @inkdes-email/card

# yarn
yarn add @inkdes-email/card
```

## Quick start

```tsx
import { Text } from "@inkdes-email/components";
import { Card } from "@inkdes-email/card";

export default function EmailTemplate() {
  return <>
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
  </>
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| header | React.ReactNode | No      | —       |  |
| content | React.ReactNode | No      | —       |  |
| footer | React.ReactNode | No      | —       |  |
| headerBackgroundColor | string | No | #fff | — |
| contentBackgroundColor | string | No | #fff | — |
| footerBackgroundColor | string | No | #fff | — |
| borderRadius | string | No | `24px` | — |
| padding | string | No | `` | inner padding |
| outerSpacing | string | No | `0px 20px` | outside spacing |
| width | string | No | `100%` |  |

## License

MIT © iClasser
