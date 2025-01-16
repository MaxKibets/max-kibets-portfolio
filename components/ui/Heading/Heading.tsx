import { FC, JSX } from "react";

import { HEADING_LEVEL } from "@/constants";

import css from "./heading.module.css";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({ children, level = HEADING_LEVEL.H3 }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag className={css.heading}>{children}</HeadingTag>;
};

export default Heading;
