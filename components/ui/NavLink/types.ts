export type NavLinkProps = {
  href: string;
  title: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onClick?: () => void;
  underlined?: boolean;
  indented?: boolean;
  className?: string;
};
