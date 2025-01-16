import { FC } from "react";
import clsx from "clsx";
import Link from "next/link";

import { ACTION_VARIANT } from "@/constants";

import { ActionProps } from "./types";
import css from "./action.module.css";

const Action: FC<ActionProps> = ({
  children,
  href,
  disabled,
  className,
  type,
  variant = ACTION_VARIANT.DEFAULT,
  active,
  onClick,
  title,
}) => {
  const classNames = clsx(css.action, className, css[variant], {
    [css.disabled]: disabled,
    [css.active]: active,
  });

  if (href) {
    return (
      <Link href={href} className={classNames} onClick={onClick} title={title}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        disabled={disabled}
        className={classNames}
        type={type}
        onClick={onClick}
        title={title}
      >
        {children}
      </button>
    );
  }
};

export default Action;
