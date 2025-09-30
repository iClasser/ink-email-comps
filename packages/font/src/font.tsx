import type * as React from 'react';

type FallbackFont =
  | 'Arial'
  | 'Helvetica'
  | 'Verdana'
  | 'Georgia'
  | 'Times New Roman'
  | 'serif'
  | 'sans-serif'
  | 'monospace'
  | 'cursive'
  | 'fantasy';

type FontFormat =
  | 'woff'
  | 'woff2'


type FontWeight = React.CSSProperties['fontWeight'];
type FontStyle = React.CSSProperties['fontStyle'];

export interface FontProps {
  family: string;
  fallback: FallbackFont | FallbackFont[];
  url: string;
  format: FontFormat;
  style?: FontStyle;
  weight?: FontWeight;
  targetClasses?: string[];
  targetTags?: string[];
}

export const Font: React.FC<Readonly<FontProps>> = ({
  weight = 400,
  format,
  url,
  fallback,
  family,
  style='normal',
  targetClasses=[],
  targetTags=[],
}) => {
  if(!url){
    return null;
  }

  const src = `src: url(${url}) format('${format}');`;

  const cssStyle = `
    @font-face {
      font-family: "${family}";
      ${src}
      font-style: ${style};
      font-weight: ${weight};
      font-display: swap;
      mso-font-alt: "${fallback}";
      mso-font-alt: "${
        Array.isArray(fallback) ? fallback[0] : fallback
      }';
    }

    ${targetClasses.map(cls => `
    .${cls} {
      font-family: "${family}";
    }
    `).join('')}

    ${targetTags.map(tag => 
      `
      ${tag} {
        font-family: "${family}";
      }
      `
    ).join('')}
  `;
  return <style dangerouslySetInnerHTML={{ __html: cssStyle }} />;
};
