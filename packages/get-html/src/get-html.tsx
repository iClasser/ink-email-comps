import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const getHtml = (EmailTemplate: any): [string | null, Error | null] => {
  try {
    if(!React.isValidElement(EmailTemplate)) {
      throw new Error("EmailTemplate is not a valid element");
    }
    const html = renderToStaticMarkup(EmailTemplate);
    return [html, null];
  } catch (error) {
    return [null, error as Error];
  }
};

getHtml.displayName = "getHtml";

export { getHtml };