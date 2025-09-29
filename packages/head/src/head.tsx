import * as React from "react";

export interface HeadProps extends React.ComponentPropsWithoutRef<"head"> {
  children: React.ReactNode;
  title?: string;
}
const DEFAULT_CSS_STYLES = `
@charset "utf-8";
html {
  box-sizing: border-box;
  height: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  margin: 0;
  padding: 0;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
* {
  -webkit-text-size-adjust: none;
}
`;

export const Head: React.FC<HeadProps> = ({ children, title, defaultCss = DEFAULT_CSS_STYLES }) => {
  return (
    <head>
      {/* email metadata */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <meta name="x-apple-disable-message-reformatting" />
      {/* default css styles */}
      <style type="text/css" dangerouslySetInnerHTML={{ __html: defaultCss }} />
      {title !== undefined && <title>{title}</title>}
      {children}
    </head>
  );
};

Head.displayName = "Head";
