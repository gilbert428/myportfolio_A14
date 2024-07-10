// src/components/Link/Link.types.tsx
export interface LinkProps {
  primary?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
