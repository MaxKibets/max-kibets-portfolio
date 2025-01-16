import { FC } from "react";
import clsx from "clsx";

import { IconLabelProps } from "./types";
import css from "./iconLabel.module.css";

const IconLabel: FC<IconLabelProps> = ({
  prefixIcon,
  text,
  suffixIcon,
  className,
  onClick,
}) => (
  <span className={clsx(css.iconLabel, className)} onClick={onClick}>
    {prefixIcon}
    {text}
    {suffixIcon}
  </span>
);

export default IconLabel;
