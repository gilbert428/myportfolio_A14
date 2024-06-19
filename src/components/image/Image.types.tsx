// src/components/Image/Image.types.ts
export interface ImageProps {
    primary?: boolean;
    large?: boolean;
    disabled?: boolean;
    backgroundColor?: string;
    src: string;
    alt: string;
    onClick?: () => void;
  }
  