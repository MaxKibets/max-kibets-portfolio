import { Route, WithChildren } from "@/types";

export type NavLinkProps = WithChildren<{
  href: Route;
  underlined?: boolean;
  outlined?: boolean;
  className?: string;
}>;
