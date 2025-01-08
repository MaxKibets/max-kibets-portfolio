import { FC } from "react";
import clsx from "clsx";

import css from "./iconLabel.module.css";
import { IconLabelProps } from "./types";
import { SIZE } from "@/constants";

const IconLabel: FC<IconLabelProps> = ({
  onClick,
  prefixIcon,
  text,
  suffixIcon,
  size = SIZE.SMALL,
  tag: Tag = "span",
  className,
}) => (
  <Tag
    onClick={onClick}
    className={clsx(
      css.iconLabel,
      css[size],
      { [css.clickable]: Boolean(onClick) },
      className,
    )}
  >
    {prefixIcon}
    {text}
    {suffixIcon}
  </Tag>
);

export default IconLabel;
