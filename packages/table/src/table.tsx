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

const TableContext = React.createContext<TableContextValue | undefined>(undefined);

export const Table: React.FC<TableProps> = ({
  spacing = "0px 0px 20px 0px",
  padding = "10px",
  border = false,
  borderColor = "#e5e5e5",
  width = "100%",
}) => {
  const tableOuterStyles: React.CSSProperties = {};
  const tableStyles: React.CSSProperties = {};
  const contextValue = React.useMemo<TableContextValue>(() => ({
    padding,
    border,
    borderColor,
  }), [padding, border, borderColor]);
  if (spacing) {
    tableOuterStyles.padding = spacing;
  }
  if (padding) {
    tableStyles.padding = padding;
  }
  if (border) {
    tableStyles.border = `1px solid ${borderColor}`;
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
      >
        <tr>
          <td style={tableStyles}>
            <TableContext.Provider value={contextValue}>{children}</TableContext.Provider>
          </td>
        </tr>
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
      <tr>
        <td style={tableOuterStyles}>{renderChildren()}</td>
      </tr>
    </table>
  ) : (
    renderChildren()
  );
};

interface TableRowProps extends React.ComponentPropsWithoutRef<"tr"> {
  children: React.ReactNode;
  backgroundColor?: string;
  vAlign?: "top" | "middle" | "bottom";
  align?: "left" | "center" | "right";
  padding?: string;
  border?: boolean;
  borderColor?: string;
}

const Row: React.FC<TableRowProps> = ({
  children,
  backgroundColor,
  align = "left",
  vAlign = "middle",
  padding,
  border,
  borderColor,
}: TableRowProps) => {
  const rowStyles: React.CSSProperties = {};
  const rowProps: React.ComponentPropsWithoutRef<"tr"> = {};
  const parentContext = React.useContext(TableContext);
  const rowContext: TableContextValue = React.useMemo(() => ({
    padding: padding ?? parentContext?.padding,
    border: typeof border === "boolean" ? border : parentContext?.border,
    borderColor: borderColor ?? parentContext?.borderColor,
  }), [padding, border, borderColor, parentContext]);
  if (backgroundColor) {
    rowProps.bgColor = backgroundColor;
    rowStyles.backgroundColor = backgroundColor;
  }
  if (align) {
    rowProps.align = align;
  }
  if (vAlign) {
    rowProps.vAlign = vAlign;
  }

  return (
    <tr style={rowStyles} {...rowProps}>
      <TableContext.Provider value={rowContext}>{children}</TableContext.Provider>
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
  backgroundColor?: string;
}

const Col: React.FC<TableColProps> = ({
  children,
  borderColor,
  border,
  padding,
  backgroundColor,
}: TableColProps) => {
  const colStyles: React.CSSProperties = {};
  const colProps: React.ComponentPropsWithoutRef<"td"> = {};
  const context = React.useContext(TableContext);
  const effectiveBorder: boolean | undefined =
    typeof border === "boolean" ? border : context?.border;
  const effectiveBorderColor: string | undefined = borderColor ?? context?.borderColor;
  const effectivePadding: string | undefined = padding ?? context?.padding;
  if (backgroundColor) {
    colProps.bgColor = backgroundColor;
    colStyles.backgroundColor = backgroundColor;
  }
  if (effectiveBorder) {
    colProps.border = `1px solid ${effectiveBorderColor ?? "#e5e5e5"}`;
  }
  if (effectivePadding) {
    colProps.padding = effectivePadding;
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
