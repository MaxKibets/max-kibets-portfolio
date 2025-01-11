import { FC } from "react";

import { WithChildren } from "@/types";

import css from "./error.module.css";

const Error: FC<WithChildren> = ({ children }) => (
  <div className={css.error}>{children}</div>
);

export default Error;
