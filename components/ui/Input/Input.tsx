import { FC, InputHTMLAttributes } from "react";

import css from "./input.module.css";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input className={css.input} {...props} />
);

export default Input;
