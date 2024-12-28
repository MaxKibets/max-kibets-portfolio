import { FC } from "react";

import css from "./button.module.css";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, title, disabled, onClick }) => (
  <button
    type="button"
    title={title}
    className={css.button}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
