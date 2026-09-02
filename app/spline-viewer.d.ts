import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        loading?: "auto" | "eager";
        "loading-anim"?: boolean;
        "loading-anim-type"?: string;
        background?: string;
      };
    }
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        loading?: "auto" | "eager";
        "loading-anim"?: boolean;
        "loading-anim-type"?: string;
        background?: string;
      };
    }
  }
}
