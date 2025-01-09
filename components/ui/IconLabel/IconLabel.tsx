import { FC } from "react";
import clsx from "clsx";

import { SIZE } from "@/constants";

import { IconLabelProps } from "./types";
import css from "./iconLabel.module.css";

const IconLabel: FC<IconLabelProps> = ({
  prefixIcon,
  text,
  suffixIcon,
  size = SIZE.SMALL,
  className,
  onClick,
}) => (
  <span className={clsx(css.iconLabel, css[size], className)} onClick={onClick}>
    {prefixIcon}
    {text}
    {suffixIcon}
  </span>
);

export default IconLabel;
