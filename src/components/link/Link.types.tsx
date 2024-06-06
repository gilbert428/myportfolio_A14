// Link.types.tsx
export interface LinkProps {
    primary?: boolean;
    disabled?: boolean;
    backgroundColor?: string;
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
  }
  