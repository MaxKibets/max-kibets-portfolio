import { FC } from "react";

import { WithChildren } from "@/types";

import css from "./paragraph.module.css";

const Paragraph: FC<WithChildren<{}>> = ({ children }) => (
  <p className={css.paragraph}>"{children}"</p>
);

export default Paragraph;
