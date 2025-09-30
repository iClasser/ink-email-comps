import * as React from "react";

export interface TextProps extends React.ComponentPropsWithoutRef<"body"> {
  children: React.ReactNode;
  center?: boolean;
  spacingBottom?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  className?: string;
}

export enum TextClassNamesEnum {
  wrapper = 'inkdes-text-wrapper',
  text = 'inkdes-text',
}

export const Text: React.FC<TextProps> = ({
  children,
  spacingBottom,
  center,
  fontWeight,
  fontFamily,
  fontSize,
  fontColor = '#000',
  className = '',
  ...props
}) => {
  const styles: React.CSSProperties = {};
  Object.assign(styles);
  Object.assign(
    styles,
    fontWeight && {
      fontWeight,
      ...(fontFamily && { fontFamily }),
      ...(fontSize && { fontSize }),
      ...(fontColor && { color: fontColor }),
    }
  );
  if (props.style) {
    Object.assign(styles, props.style);
  }
  
  const wrapperStyles: React.CSSProperties = {};
  Object.assign(wrapperStyles, spacingBottom && { spacingBottom });


  return (
    <table border="0" cellPadding="0" cellSpacing="0" role="presentation">
      <tr>
        <td align={center ? "center" : undefined} dir="ltr" className={`${className} ${TextClassNamesEnum.wrapper}`} style={wrapperStyles}>
          <p style={styles} className={`${TextClassNamesEnum.text}`}>{children}</p>
        </td>
      </tr>
    </table>
  );
};

Text.displayName = "Text";
