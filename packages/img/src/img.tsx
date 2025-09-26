import * as React from "react";

export interface ImgProps extends React.ComponentPropsWithoutRef<"img"> {
  width?: string | number;
  height?: string | number;
}

export const Img: React.FC<ImgProps> = ({ width, height, ...props }) => {
  return <img width={width} height={height} {...props} />;
};


