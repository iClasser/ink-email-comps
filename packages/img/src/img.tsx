import * as React from "react";

export interface ImgProps extends React.ComponentPropsWithoutRef<"img"> {
  width?: string | number;
  height?: string | number;
  src: string;
  alt?: string;
  center?: boolean;
  direction?: "ltr" | "rtl";
  borderRadius?: string;
  outerSpacing?: string;
}

export const Img: React.FC<ImgProps> = ({
  width,
  height,
  src = "",
  alt = "",
  center = false,
  direction = "ltr",
  outerSpacing,
  borderRadius,
  ...props
}) => {
  const getOtherStyles = () => {
    const styles: React.CSSProperties = {};
    if (borderRadius) {
      styles.borderRadius = borderRadius;
    }
    return styles;
  };

  const getOuterSpacing = () => {
    const styles: React.CSSProperties = {};
    if (outerSpacing) {
      styles.padding = outerSpacing;
    }
    return styles;
  };

  const imgProps: React.CSSProperties = {};
  if (typeof width === "number") {
    imgProps.width = width;
  }
  if (typeof height === "number") {
    imgProps.height = height;
  }

  return (
    <table width="100" border="0" cellPadding="0" cellSpacing="0">
      <tr>
        <td
          align={center ? "center" : "left"}
          dir={direction}
          style={{
            textAlign: center ? "center" : "left",
            direction: direction,
            ...getOuterSpacing(),
          }}
        >
          <img
            src={src}
            alt={alt}
            {...imgProps}
            style={{
              width: typeof width === "number" ? `${width}px` : width,
              height: typeof height === "number" ? `${height}px` : height,
              ...getOtherStyles(),
            }}
            {...props}
          />
        </td>
      </tr>
    </table>
  );
};
