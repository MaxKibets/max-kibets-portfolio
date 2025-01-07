import { Route, Size } from "@/types/shared";

export type NavLinkProps = {
  href: Route;
  underlined?: boolean;
  outlined?: boolean;
  className?: string;
  text: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  size?: Size;
};
