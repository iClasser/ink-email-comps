# @inkdes-email/table

Table component for email
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
pnpm add @inkdes-email/table

# npm
npm install @inkdes-email/table

# yarn
yarn add @inkdes-email/table
```

## Quick start

```tsx
import { Table } from "@inkdes-email/table";

export default function EmailTemplate() {
  return (
    <>
      <Table spacing="0px 0px 20px 0px" padding="10px" border borderColor="#e5e5e5" width="100%">
        <>Your content here</>
      </Table>
    </>
  );
}
```

## Examples

### Nested rows and columns

```tsx
import { Table } from "@inkdes-email/table";

export default function ExampleRowsAndCols() {
  return (
    <Table spacing="0px 0px 20px 0px" padding="10px" border>
      <table role="presentation" width="100%" border={0} cellPadding={0} cellSpacing={0}>
        <tbody>
          <Table.Row align="left" vAlign="middle">
            <Table.Col>Cell 1</Table.Col>
            <Table.Col>Cell 2</Table.Col>
          </Table.Row>
        </tbody>
      </table>
    </Table>
  );
}
```

### Inherit wrapper styles via context

`padding`, `border`, and `borderColor` from `Table` flow to `Row` and `Col` via context.

```tsx
export default function ExampleContext() {
  return (
    <Table padding="12px" border borderColor="#ddd">
      <table role="presentation" width="100%" border={0} cellPadding={0} cellSpacing={0}>
        <tbody>
          <Table.Row>
            {/* These cells get padding/border from the Table context */}
            <Table.Col>Left</Table.Col>
            <Table.Col>Right</Table.Col>
          </Table.Row>
        </tbody>
      </table>
    </Table>
  );
}
```

### Override per row or col

`Table.Row` can override context for its children; `Table.Col` can override for itself.

```tsx
export default function ExampleOverrides() {
  return (
    <Table padding="12px" border borderColor="#ddd">
      <table role="presentation" width="100%" border={0} cellPadding={0} cellSpacing={0}>
        <tbody>
          {/* This row tightens padding and changes border color for its cells */}
          <Table.Row padding="6px" borderColor="#bbb">
            <Table.Col>Compact A</Table.Col>
            {/* This single cell removes border and sets its own padding */}
            <Table.Col border={false} padding="16px">Emphasized B</Table.Col>
          </Table.Row>
        </tbody>
      </table>
    </Table>
  );
}
```

### Using colSpan

`Table.Col` extends native `td` props, so attributes like `colSpan` work as expected.

```tsx
export default function ExampleColSpan() {
  return (
    <Table padding="10px" border>
      <table role="presentation" width="100%" border={0} cellPadding={0} cellSpacing={0}>
        <tbody>
          <Table.Row>
            <Table.Col colSpan={2} padding="8px"><strong>Section Header</strong></Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>Item A</Table.Col>
            <Table.Col align="right">$10</Table.Col>
          </Table.Row>
        </tbody>
      </table>
    </Table>
  );
}
```

## Props

### `Table`

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| spacing | string | No | `"0px 0px 20px 0px"` | Outer spacing applied around the inner table (as padding on the wrapper table cell). |
| padding | string | No | `"10px"` | Inner padding applied to the content cell inside the table. |
| border | boolean | No | `false` | Toggles a border around the content cell. |
| borderColor | string | No | `"#e5e5e5"` | Color for the border when `border` is `true`. |
| width | string | No | `"100%"` | Width of the table element. |
| children | React.ReactNode | Yes | — | Content rendered inside the table's single content cell. |

Notes:

- The `Table` component renders an outer wrapper (for `spacing`) and an inner table with a single row and single cell that contains your `children`.
- To render multiple rows/columns, include your own nested `<table>` inside `children` and use `Table.Row`/`Table.Col` within that nested table (see Examples).
- `padding`, `border`, and `borderColor` are provided to descendants via context. Descendants can override them.

### `Table.Row`

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes | — | Content of the row (typically one or more `Table.Col`). |
| backgroundColor | string | No | — | Background color for the row. |
| align | `"left" \| "center" \| "right"` | No | `"left"` | Horizontal alignment for the row. |
| vAlign | `"top" \| "middle" \| "bottom"` | No | `"middle"` | Vertical alignment for the row. |
| padding | string | No | — | Overrides context `padding` for this row's cells. |
| border | boolean | No | — | Overrides context `border` for this row's cells. |
| borderColor | string | No | — | Overrides context `borderColor` for this row's cells. |

### `Table.Col`

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes | — | Content for the cell. |
| backgroundColor | string | No | — | Background color for the cell. |
| padding | string | No | — | Padding for the cell (defaults from context if not provided). |
| border | boolean | No | — | Whether to set a border on the cell (defaults from context if not provided). |
| borderColor | string | No | — | Color for the cell border when `border` is set (defaults from context if not provided). |

## License

MIT © iClasser
