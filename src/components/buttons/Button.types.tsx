// Button.types.tsx
export interface ButtonProps {
    primary: boolean;
    disabled?: boolean;
    backgroundColor?: string;
    children: React.ReactNode;
    onClick?: () => void;
  }
  