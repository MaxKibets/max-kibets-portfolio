import { ActionVariant, Route, WithChildren } from "@/types";

export type NavLinkProps = WithChildren<{
  href: Route;
  variant?: ActionVariant;
  outlined?: boolean;
  className?: string;
}>;
