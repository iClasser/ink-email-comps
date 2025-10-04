import * as React from "react";

interface AProps extends React.ComponentPropsWithoutRef<"a"> {
  color?: string;
  style?: React.CSSProperties;
  href: string;
  children: React.ReactNode | string;
  rel?: string;
  ariaLabel?: string;
  noDecoration?: boolean;
}

export enum AClassNamesEnum {
  anchor = "inkdes-a-anchor",
  text = "inkdes-a-text",
}

export const A: React.FC<AProps> = ({
  children,
  href,
  rel = "noopener noreferrer",
  ariaLabel,
  style,
  color,
  noDecoration = false,
  ...props
}) => {
  const styles: React.CSSProperties = {};
  if (color) {
    styles.color = color;
  }
  if (noDecoration) {
    styles.textDecoration = "none";
  }
  if (style) {
    Object.assign(styles, style);
  }

  return (
    <a
      href={href}
      rel={rel}
      aria-label={ariaLabel}
      style={styles}
      className={AClassNamesEnum.anchor}
      {...props}
    >
      {children}
    </a>
  );
};

A.displayName = "A";
