import { FC } from "react";
import clsx from "clsx";

import css from "./iconLabel.module.css";
import { IconLabelProps } from "./types";

const IconLabel: FC<IconLabelProps> = ({
  onClick,
  prefixIcon,
  text,
  suffixIcon,
  indented,
  tag: Tag = "span",
  className,
}) => (
  <Tag
    onClick={onClick}
    className={clsx(
      css.iconLabel,
      { [css.indented]: indented, [css.clickable]: Boolean(onClick) },
      className,
    )}
  >
    {prefixIcon}
    {text}
    {suffixIcon}
  </Tag>
);

export default IconLabel;
