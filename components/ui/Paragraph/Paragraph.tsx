import { FC } from "react";

import { WithChildren } from "@/types";

import css from "./paragraph.module.css";

const Paragraph: FC<WithChildren> = ({ children }) => (
  <p className={css.paragraph}>&quot;{children}&quot;</p>
);

export default Paragraph;
