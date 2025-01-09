import { MouseEventHandler } from "react";

import { WithChildren } from "@/types";

export type ButtonProps = WithChildren<{
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  outlined?: boolean;
  className?: string;
}>;
