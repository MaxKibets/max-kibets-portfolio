import { FC, LabelHTMLAttributes } from "react";

import { WithChildren } from "@/types";

import css from "./label.module.css";

const Label: FC<WithChildren<LabelHTMLAttributes<HTMLLabelElement>>> = ({
  children,
  ...props
}) => (
  <label className={css.label} {...props}>
    {children}
  </label>
);

export default Label;
