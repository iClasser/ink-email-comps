import * as React from "react";

interface TableProps extends React.ComponentPropsWithoutRef<"table"> {
  children: React.ReactNode;
  spacing?: string;
  padding?: string;
  border?: boolean;
  borderColor?: string;
  width?: string;
}

export enum TableClassNamesEnum {
  table = "inkdes-table",
}

interface TableContextValue {
  padding?: string;
  border?: boolean;
  borderColor?: string;
}

const TableContext = React.createContext<TableContextValue | undefined>(
  undefined
);

export const Table: React.FC<TableProps> = ({
  children,
  spacing = "0px 0px 20px 0px",
  padding = "10px",
  border = false,
  borderColor = "#e5e5e5",
  width = "100%",
}) => {
  const tableOuterStyles: React.CSSProperties = {};
  const tableStyles: React.CSSProperties = {};
  const contextValue = React.useMemo<TableContextValue>(
    () => ({
      padding,
      border,
      borderColor,
    }),
    [padding, border, borderColor]
  );
  if (spacing) {
    tableOuterStyles.padding = spacing;
  }
  if (padding) {
    tableStyles.padding = padding;
  }
  const renderChildren = () => {
    return (
      <table
        className={TableClassNamesEnum.table}
        border="0"
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        width={width}
        style={tableStyles}
      >
        <tbody>
          <TableContext.Provider value={contextValue}>
            {React.Children.map(children, (child, index) =>
              React.isValidElement(child)
                ? React.cloneElement(child as React.ReactElement<any>, {
                    __isFirstRow: index === 0,
                  })
                : child
            )}
          </TableContext.Provider>
        </tbody>
      </table>
    );
  };

  return spacing ? (
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      width="100%"
    >
      <tbody>
        <tr>
          <td style={tableOuterStyles}>{renderChildren()}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    renderChildren()
  );
};

interface TableRowProps extends React.ComponentPropsWithoutRef<"tr"> {
  children: React.ReactNode;
  backgroundColor?: string;
  valign?: "top" | "middle" | "bottom";
  align?: "left" | "center" | "right";
  padding?: string;
  border?: boolean;
  borderColor?: string;
  /** internal: set by Table */
  __isFirstRow?: boolean;
}

const Row: React.FC<TableRowProps> = ({
  children,
  backgroundColor,
  align = "left",
  valign = "middle",
  padding,
  border,
  borderColor,
  __isFirstRow,
}: TableRowProps) => {
  const rowStyles: React.CSSProperties = {};
  const rowProps: React.ComponentPropsWithoutRef<"tr"> = {};
  const parentContext = React.useContext(TableContext);
  const rowContext: TableContextValue = React.useMemo(
    () => ({
      padding: padding ?? parentContext?.padding,
      border: typeof border === "boolean" ? border : parentContext?.border,
      borderColor: borderColor ?? parentContext?.borderColor,
    }),
    [padding, border, borderColor, parentContext]
  );
  if (backgroundColor) {
    rowProps.bgcolor = backgroundColor;
    rowStyles.backgroundColor = backgroundColor;
  }
  if (align) {
    rowProps.align = align;
  }
  if (valign) {
    rowProps.valign = valign;
  }

  return (
    <tr style={rowStyles} {...rowProps}>
      <TableContext.Provider value={rowContext}>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, {
                __isFirstCol: index === 0,
                __isFirstRow,
              })
            : child
        )}
      </TableContext.Provider>
    </tr>
  );
};
Row.displayName = "Table.Row";
Table.Row = Row as any;

interface TableColProps extends React.ComponentPropsWithoutRef<"td"> {
  children: React.ReactNode;
  borderColor?: string;
  border?: boolean;
  padding?: string;
  width?: string;
  backgroundColor?: string;
  /** internal: set by Row */
  __isFirstCol?: boolean;
  /** internal: set by Table/Row */
  __isFirstRow?: boolean;
}

const Col: React.FC<TableColProps> = ({
  children,
  borderColor,
  border,
  padding,
  width,
  backgroundColor,
  __isFirstCol,
  __isFirstRow,
}: TableColProps) => {
  const colStyles: React.CSSProperties = {};
  const colProps: React.ComponentPropsWithoutRef<"td"> = {};
  const context = React.useContext(TableContext);
  const effectiveBorder: boolean | undefined =
    typeof border === "boolean" ? border : context?.border;
  const effectiveBorderColor: string | undefined =
    borderColor ?? context?.borderColor;
  const effectivePadding: string | undefined = padding ?? context?.padding;
  if (backgroundColor) {
    colProps.bgcolor = backgroundColor;
    colStyles.backgroundColor = backgroundColor;
  }
  // Side-specific borders to avoid double borders.
  if (effectiveBorder) {
    const color = effectiveBorderColor ?? "#e5e5e5";
    // Every cell gets right and bottom border
    colStyles.borderRight = `1px solid ${color}`;
    colStyles.borderBottom = `1px solid ${color}`;
    // First row cells get top border
    if (__isFirstRow) {
      colStyles.borderTop = `1px solid ${color}`;
    }
    // First column cells get left border
    if (__isFirstCol) {
      colStyles.borderLeft = `1px solid ${color}`;
    }
  }
  if (effectivePadding) {
    colStyles.padding = effectivePadding;
  }
  if (width) {
    colProps.width = width;
  }
  return (
    <td style={colStyles} {...colProps}>
      {children}
    </td>
  );
};
Col.displayName = "Table.Col";
Table.Col = Col as any;

Table.displayName = "Table";
