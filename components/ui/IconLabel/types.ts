import { Size } from "@/types";
import { JSX } from "react";

export type IconLabelProps = {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  text: string;
  size?: Size;
  onClick?: () => void;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
};
