import { JSX } from "react";

export type IconLabelProps = {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  text: string;
  indented?: boolean;
  onClick?: () => void;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
};
