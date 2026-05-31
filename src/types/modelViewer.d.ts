// Type declarations for the <model-viewer> web component
declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      "auto-rotate"?: boolean | string;
      "camera-controls"?: boolean | string;
      exposure?: string | number;
      "shadow-intensity"?: string | number;
      "environment-image"?: string;
      loading?: string;
      // Allow any other attributes to avoid TS errors
      [key: string]: any;
    };
  }
}
