import { Route } from "@/types/shared";

export type NavLinkProps = {
  href: Route;
  underlined?: boolean;
  className?: string;
  text: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  indented?: boolean;
};
