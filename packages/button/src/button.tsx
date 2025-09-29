import React from "react";

interface IconProps {
  url: string;
  alt: string;
  width: string | number;
  height: string | number;
}

export interface ButtonProps {
  text: string;
  href: string;
  icon?: IconProps;
  backgroundColor?: string;
  align?: "left" | "center" | "right";
  direction?: "ltr" | "rtl";
  textColor?: string;
  borderRadius?: string;
  outerSpacing?: string;
  style?: React.CSSProperties;
}

export const Button = ({
  text,
  href,
  icon,
  backgroundColor = "#000",
  align = "center",
  direction = "ltr",
  textColor = "#fff",
  borderRadius = "12px",
  outerSpacing = "0",
  style = {
    fontSize: 16,
    fontWeight: 600,
    padding: "14px 24px",
  },
  ...props
}: ButtonProps & { [key: string]: any }) => {
  const computeArcSize = () => {
    // VML arcsize as percentage string; rough mapping from px radius
    if (!borderRadius) return "10%";
    const match = borderRadius.match(/(\d+)(px)?/);
    if (!match) return "10%";
    const radiusPx = parseInt(match[1], 10);
    // Assume typical button height ~ 44px for touch targets
    const pct = Math.max(0, Math.min(50, Math.round((radiusPx / 44) * 100)));
    return `${pct}%`;
  };

  const renderContent = () => {
    const textNode = (
      <span
        style={{
          color: textColor,
          verticalAlign: "middle",
          textDecoration: "none",
          display: "inline-block",
          ...style,
        }}
      >
        {text}
      </span>
    );

    if (!icon) return textNode;

    const spacer = (
      <span style={{ display: "inline-block", width: 8, lineHeight: 0 }}>
        &nbsp;
      </span>
    );

    const iconImg = (
      <img
        src={icon.url}
        alt={icon.alt}
        width={typeof icon.width === "number" ? icon.width : undefined}
        height={typeof icon.height === "number" ? icon.height : undefined}
        style={{
          width:
            typeof icon.width === "number" ? `${icon.width}px` : icon.width,
          height:
            typeof icon.height === "number" ? `${icon.height}px` : icon.height,
          verticalAlign: "middle",
          border: 0,
          outline: "none",
          textDecoration: "none",
        }}
      />
    );

    return direction === "rtl" ? (
      <>
        {textNode}
        {spacer}
        {iconImg}
      </>
    ) : (
      <>
        {iconImg}
        {spacer}
        {textNode}
      </>
    );
  };

  const cellOuterPadding = outerSpacing ? outerSpacing : undefined;

  const getInlineStylesIfAvailable = (style: React.CSSProperties) => {
    if (!style) return "";
    const pickStyles = ["fontFamily", "fontWeight", "lineHeight", "textAlign"];
    const snakeCaseStyles = pickStyles.map((style) =>
      style.replace(/([A-Z])/g, "_$1").toLowerCase()
    );
    const styles = snakeCaseStyles
      .map((style) => {
        const value = style[style];
        return value ? `${style}:${value};` : "";
      })
      .join("");
    return styles;
  };

  const vml = `<!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${href}" style="height:44px;v-text-anchor:middle;" arcsize="${computeArcSize()}" strokecolor="${backgroundColor}" fillcolor="${backgroundColor}">
    <w:anchorlock/>
    <center style="color:${textColor};${getInlineStylesIfAvailable(style)}">
      ${text}
    </center>
  </v:roundrect>
  <![endif]-->`;

  const nonMsoStart = `<!--[if !mso]><!-- -->`;
  const nonMsoEnd = `<!--<![endif]-->`;

  return (
    <table
      width="100%"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
    >
      <tr>
        <td
          align={align}
          dir={direction}
          style={{
            textAlign: align,
            direction: direction,
            padding: cellOuterPadding,
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: vml }} />

          <table border="0" cellPadding="0" cellSpacing="0" role="presentation">
            <tr>
              <td
                align="center"
                style={{
                  backgroundColor: backgroundColor,
                  borderRadius: borderRadius,
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: nonMsoStart }} />
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={text}
                  style={{
                    display: "inline-block",
                    backgroundColor: backgroundColor,
                    color: textColor,
                    borderRadius: borderRadius,
                    border:
                      style.border !== undefined
                        ? style.border
                        : `1px solid ${backgroundColor}`,
                    padding:
                      style.padding !== undefined ? style.padding : "14px 24px",
                    textDecoration: "none",
                    textAlign: "center",
                    ...style,
                  }}
                  {...props}
                >
                  {renderContent()}
                </a>
                <span dangerouslySetInnerHTML={{ __html: nonMsoEnd }} />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

Button.displayName = "Button";
