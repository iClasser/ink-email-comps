import * as React from "react";

interface CardProps extends React.ComponentPropsWithoutRef<"table"> {
  padding?: string;
  width?: string;
  borderRadius?: string;
  outerSpacing?: string;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  headerBackgroundColor?: string;
  contentBackgroundColor?: string;
  footerBackgroundColor?: string;
}

export enum CardClassNamesEnum {
  table = "inkdes-card-table",
  header = "inkdes-card-header",
  content = "inkdes-card-content",
  footer = "inkdes-card-footer",
}

function breakDownValues(value: string) {
  const returnValues = {
    topLeft: "",
    topRight: "",
    bottomLeft: "",
    bottomRight: "",
  };
  if (!value) {
    return returnValues;
  }
  let splitValue = value.split(" ");
  if (splitValue.length === 1) {
    returnValues.topLeft = splitValue[0];
    returnValues.topRight = splitValue[0];
    returnValues.bottomLeft = splitValue[0];
    returnValues.bottomRight = splitValue[0];
  }
  if (splitValue.length === 2) {
    returnValues.topLeft = splitValue[0];
    returnValues.topRight = splitValue[1];
    returnValues.bottomLeft = splitValue[0];
    returnValues.bottomRight = splitValue[1];
  }
  if (splitValue.length === 3) {
    returnValues.topLeft = splitValue[0];
    returnValues.topRight = splitValue[1];
    returnValues.bottomLeft = splitValue[2];
    returnValues.bottomRight = splitValue[2];
  }
  if (splitValue.length === 4) {
    returnValues.topLeft = splitValue[0];
    returnValues.topRight = splitValue[1];
    returnValues.bottomLeft = splitValue[2];
    returnValues.bottomRight = splitValue[3];
  }
  return returnValues;
}
export const Card: React.FC<CardProps> = ({
  padding = "12px 15px",
  width = "100%",
  borderRadius = "24px",
  outerSpacing = "0px 20px",
  header,
  headerBackgroundColor = "#fff",
  content,
  contentBackgroundColor = "#fff",
  footer,
  footerBackgroundColor = "#fff",
}) => {
  const {
    topLeft: topLeftRadius,
    topRight: topRightRadius,
    bottomLeft: bottomLeftRadius,
    bottomRight: bottomRightRadius,
  } = breakDownValues(borderRadius);
  const {
    topLeft: topLeftPadding,
    topRight: topRightPadding,
    bottomLeft: bottomLeftPadding,
    bottomRight: bottomRightPadding,
  } = breakDownValues(padding);
  const {
    topLeft: topLeftOuterSpacing,
    topRight: topRightOuterSpacing,
    bottomLeft: bottomLeftOuterSpacing,
    bottomRight: bottomRightOuterSpacing,
  } = breakDownValues(outerSpacing);

  const getHeaderStyle = () => {
    const style: React.CSSProperties = {};
    style.backgroundColor = headerBackgroundColor;
    style.padding = `${topLeftPadding} ${topRightPadding}`;
    style.borderRadius = `${topLeftRadius} ${topRightRadius}`;
    return style;
  };

  const getContentStyle = () => {
    const style: React.CSSProperties = {};
    style.backgroundColor = contentBackgroundColor;
    if (!header && !footer) {
      style.padding = padding;
      style.borderRadius = borderRadius;
    } else if (header && !footer) {
      style.padding = `${topLeftPadding} ${topRightPadding}`;
      style.borderRadius = `${bottomLeftRadius} ${bottomRightRadius}`;
    } else if (!header && footer) {
      style.padding = `${topLeftPadding} ${topRightPadding}`;
      style.borderRadius = `${topLeftRadius} ${topRightRadius}`;
    } else {
      style.padding = `${topLeftPadding} ${topRightPadding}`;
    }
    return style;
  };

  const getFooterStyle = () => {
    const style: React.CSSProperties = {};
    style.backgroundColor = footerBackgroundColor;
    style.padding = `${bottomLeftPadding} ${bottomRightPadding}`;
    style.borderRadius = `${bottomLeftRadius} ${bottomRightRadius}`;
    return style;
  };

  return (
    <table
      className={CardClassNamesEnum.table}
      width={width}
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
    >
      <tr>
        <td
          align="center"
          style={{
            padding: outerSpacing,
          }}
        >
          {/* card header */}
          {header ? (
            <table
              width="100%"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tr>
                <td style={getHeaderStyle()} className={CardClassNamesEnum.header}>{header}</td>
              </tr>
            </table>
          ) : null}

          {/* card content */}
          {content ? (
            <table
              width="100%"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tr>
                <td style={getContentStyle()} className={CardClassNamesEnum.content}>{content}</td>
              </tr>
            </table>
          ) : null}

          {/* card footer */}
          {footer ? (
            <table
              width="100%"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tr>
                <td style={getFooterStyle()} className={CardClassNamesEnum.footer}>{footer}</td>
              </tr>
            </table>
          ) : null}
        </td>
      </tr>
    </table>
  );
};

Card.displayName = "Card";
