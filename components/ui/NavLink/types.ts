import { ActionVariant, Href, WithChildren } from "@/types";

export type NavLinkProps = WithChildren<{
  href: Href;
  variant?: ActionVariant;
  outlined?: boolean;
  className?: string;
}>;
