### @inkdes-email/get-html

Helper function to convert Email components to html
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
pnpm add @inkdes-email/get-html

# npm
npm install @inkdes-email/get-html

# yarn
yarn add @inkdes-email/get-html
```

- Signature: `(EmailTemplate: any) => [string | null, Error | null]`
- Description: Renders a valid React element to a static HTML string using `renderToStaticMarkup`. Returns `[html, null]` on success or `[null, error]` on failure. Validates input with `React.isValidElement`.
- Example:

```tsx
import { getHtml } from "@inkdes-email/get-html";
import { Html, Head, Body, Text, Button } from "@inkdes-emailcomponents";

function EmailTemplate() {
  return (<Html>
    <Body>
        <Text>Hello</Text>
        <Button text='Button' url='#' />
    </Body>
  </Html>)
}

const [html, error] = getHtml(<EmailTemplate />);
if (error) {
  // handle error
} else if (html) {
  // use html
}
```

- Requirements:
  - Node >= 18
  - React 18 or 19
