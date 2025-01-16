import { ActionVariant, Route, WithChildren } from "@/types";
import { MouseEventHandler } from "react";

export type ActionProps = WithChildren<{
  href?: Route;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: ActionVariant;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  title?: string;
}>;
