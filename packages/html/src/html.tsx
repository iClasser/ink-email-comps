import * as React from "react";

export interface HtmlProps extends React.ComponentPropsWithoutRef<"html"> {
  children: any;
  dir?: string;
  lang?: string;
}

export const Html: React.FC<HtmlProps> = ({
  children,
  dir = "ltr",
  lang = "en",
  ...props
}) => {
  return (
    <html dir={dir} lang={lang} {...props}>
      {children}
    </html>
  );
};
