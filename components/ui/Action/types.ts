import { ActionVariant, Href, WithChildren } from "@/types";
import { MouseEventHandler } from "react";

export type ActionProps = WithChildren<{
  href?: Href;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: ActionVariant;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  title?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}>;
