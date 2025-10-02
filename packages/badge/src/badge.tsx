import * as React from "react";

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode | string;
  varient?: "default" | "secondary" | "destructive" | "outline";
  padding?: string;
  noPadding?: boolean;
  spacing?: string;
}

export enum BadgeClassNamesEnum {
  badge = "inkdes-badge",
}

const badgeVariants = {
  variants: {
    variant: {
      default: {
        color: "#fff",
        backgroundColor: "#000",
        borderRadius: "8px",
      },
      secondary: {
        color: "#000",
        backgroundColor: "#dedede",
        borderRadius: "8px",
        border: "1px solid #dedede",
      },
      destructive: {
        color: "#fff",
        backgroundColor: "#ff0000",
        borderRadius: "8px",
        border: "1px solid #ff0000",
      },
      outline: {
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #000",
      },
    },
  },
};

export const Badge: React.FC<BadgeProps> = ({
  varient = "default",
  padding = "6px 8px",
  noPadding = false,
  spacing = "0px 0px 20px 0px",
  children,
  ...props
}) => {
  const styles: React.CSSProperties = {};
  styles.color = badgeVariants.variants.variant[varient].color;
  styles.backgroundColor =
    badgeVariants.variants.variant[varient].backgroundColor;
  styles.borderRadius = badgeVariants.variants.variant[varient].borderRadius;
  styles.border = badgeVariants.variants.variant[varient].border;
  if (!noPadding) {
    styles.padding = padding;
  }
  if (spacing) {
    styles.margin = spacing;
  }
  const renderChildren = () => {
    return (
      <span className={BadgeClassNamesEnum.badge} style={styles} {...props}>
        {children}
      </span>
    );
  };

  return spacing ? (
    <span style={{ padding: spacing }}>{renderChildren()}</span>
  ) : (
    renderChildren()
  );
};

Badge.displayName = "Badge";
