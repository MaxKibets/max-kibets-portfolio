import { FC, JSX } from "react";
import clsx from "clsx";

import { HEADING_LEVEL, HEADING_PREFIX, HEADING_SUFFIX } from "@/constants";

import css from "./heading.module.css";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({
  children,
  prefix = HEADING_PREFIX.CONST,
  suffix = HEADING_SUFFIX.EQUAL,
  level = HEADING_LEVEL.H3,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={clsx(css.heading, css[prefix], css[suffix])}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
