declare module "*.svg" {
  import * as React from "react";
  const src: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default src;
}
