import * as React from "react";

interface BodyContentsProps extends React.ComponentPropsWithoutRef<"table"> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  width?: number | "100%";
  padding?: string;
  outerBgColor?: string;
  backgroundColor?: string;
}

export const BodyContents: React.FC<BodyContentsProps> = ({
  children,
  style = {},
  width = "100%",
  padding = "12px 20px",
  outerBgColor = "",
  backgroundColor = "",
}) => {
  const innerPaddingAndStyle =
    padding === undefined ? {} : { style: { padding, ...style } };
  return (
    <table
      width="100%"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      align="center"
    >
      <tr align="center">
        {width === "100%" ? (
          <td
            {...innerPaddingAndStyle}
            bgColor={backgroundColor}
            width={width}
          >
            {children}
          </td>
        ) : (
          <>
            {/* outer background */}
            <td
              bgColor={outerBgColor}
              style={{
                padding: "0px",
                fontSize: "0px",
              }}
            />
            {/* content */}
            <td
              {...innerPaddingAndStyle}
              width={width}
              bgColor={backgroundColor}
            >
              {children}
            </td>
            {/* outer background */}
            <td
              bgColor={outerBgColor}
              style={{
                padding: "0px",
                fontSize: "0px",
              }}
            />
          </>
        )}
      </tr>
    </table>
  );
};

BodyContents.displayName = "BodyContents";
