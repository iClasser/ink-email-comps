import * as React from "react";

interface HrProps extends React.ComponentPropsWithoutRef<"hr"> {
  color?: string;
  width?: string;
  spacing?: string;
}

export enum HrClassNamesEnum {
  wrapper = "inkdes-hr-wrapper",
  hr = "inkdes-hr",
}

export const Hr: React.FC<HrProps> = ({
  color = "#e5e5e5",
  width = "100%",
  spacing = "0px 0px 20px 0px",
}) => {
  const hrStyles: React.CSSProperties = {};
  if (color) {
    hrStyles.color = color;
  }
  const outerStyles: React.CSSProperties = {};
  if (spacing) {
    outerStyles.padding = spacing;
  }
  const renderChildren = () => {
    return (
      <table
        className={HrClassNamesEnum.wrapper}
        border="0"
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        width={width}
      >
        <tr>
          <td>
            <hr className={HrClassNamesEnum.hr} style={hrStyles} />
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
        <td style={outerStyles}>{renderChildren()}</td>
      </tr>
    </table>
  ) : (
    renderChildren()
  );
};

Hr.displayName = "Hr";
