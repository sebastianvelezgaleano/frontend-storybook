/// <reference types="vite/client" />

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  import type { FunctionComponent, SVGProps } from "react";
  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
