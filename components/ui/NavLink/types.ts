export type NavLinkProps = {
  href: string;
  onClick?: () => void;
  underlined?: boolean;
  className?: string;
  text: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  indented?: boolean;
};
