import { MouseEventHandler } from "react";

import { WithChildren } from "@/types/shared";

export type ButtonProps = WithChildren<{
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}>;
