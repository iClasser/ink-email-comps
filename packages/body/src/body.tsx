import * as React from "react";
import { BodyContents } from "@inkdes-email-comps/body-content";

export interface BodyProps extends React.ComponentPropsWithoutRef<"body"> {
  children: React.ReactNode;
  // preheader or preview text
  previewText?: string;
  background: string;
  backgroundColor: string;
  // width of the body
  width: number | "100%";
  padding: string;
  outerBgColor: string;
  textColor: string;
}

export const Body: React.FC<BodyProps> = ({
  children,
  background = "",
  backgroundColor = "",
  previewText = "",
  width = "100%",
  padding = "12px 20px",
  // if your email has fixed width, you can set the outer background color
  outerBgColor = "",
  textColor = "",
  ...props
}) => {
  const styles: React.CSSProperties = {};
  Object.assign(styles, background && { background });
  Object.assign(
    styles,
    backgroundColor && {
      backgroundColor,
      ...(textColor && { color: textColor }),
    }
  );
  if (props.style) {
    Object.assign(styles, props.style);
  }

  return (
    <body {...props}>
      {/* hidden preview text in inbox */}
      {previewText && (
        <h5
          id="preHeader"
          style={{
            display: "none",
            color: "#ffffff",
            fontSize: "0px",
            lineHeight: "0px",
          }}
        >
          {previewText}
        </h5>
      )}
      {/* main body */}
      <BodyContents
        width={width}
        padding={padding}
        width={width}
        outerBgColor={outerBgColor}
        backgroundColor={backgroundColor}
        style={styles}
      >
        {children}
      </BodyContents>
    </body>
  );
};

Body.displayName = "Body";
