import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

import css from "./input.module.css";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={clsx(css.input, className)} {...props} />
);

export default Input;
