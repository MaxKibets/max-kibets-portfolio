import { FC } from "react";
import clsx from "clsx";

import css from "./button.module.css";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, title, disabled, outlined, onClick }) => (
  <button
    type="button"
    title={title}
    className={clsx(css.button, outlined ? css.outlined : css.shaded)}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
