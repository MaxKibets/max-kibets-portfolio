import { FC, LabelHTMLAttributes } from "react";
import clsx from "clsx";

import { WithChildren } from "@/types";

import css from "./label.module.css";

const Label: FC<WithChildren<LabelHTMLAttributes<HTMLLabelElement>>> = ({
  children,
  className,
  ...props
}) => (
  <label className={clsx(css.label, className)} {...props}>
    {children}
  </label>
);

export default Label;
