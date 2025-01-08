import { FC, Children } from "react";

import { WithChildren } from "@/types";

import css from "./group.module.css";

const Group: FC<WithChildren> = ({ children }) => (
  <div className={css.group}>{children}</div>
);

export default Group;
