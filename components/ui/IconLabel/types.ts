import { Size } from "@/types";
import { JSX } from "react";

export type IconLabelProps = {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  text: string;
  size?: Size;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  onClick?: () => void;
};
