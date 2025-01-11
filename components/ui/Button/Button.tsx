import { FC } from "react";
import clsx from "clsx";

import css from "./button.module.css";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  outlined,
  type = "button",
  children,
  title,
  className,
  onClick,
  disabled,
}) => (
  <button
    title={title}
    type={type}
    className={clsx(css.button, className, outlined ? css.outlined : css.shaded)}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
