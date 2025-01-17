import { FC } from "react";

import { WithChildren } from "@/types";

import css from "./skillsContainer.module.css";

const SkillsContainer: FC<WithChildren> = ({ children }) => (
  <article className={css.wrap}>{children}</article>
);

export default SkillsContainer;
