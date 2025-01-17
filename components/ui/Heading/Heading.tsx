import { FC, JSX } from "react";
import clsx from "clsx";

import { HEADING_LEVEL } from "@/constants";

import css from "./heading.module.css";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({
  children,
  level = HEADING_LEVEL.H3,
  withBracket,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={clsx(css.heading, { [css.withBracket]: withBracket })}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
