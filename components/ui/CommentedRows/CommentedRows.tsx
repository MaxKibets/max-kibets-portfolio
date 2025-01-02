"use client";

import { FC } from "react";

import { WithChildren } from "@/types/shared";

import css from "./commentedRows.module.css";

const CommentedRows: FC<WithChildren> = ({ children }) => (
  <div className={css.wrap}>{children}</div>
);

export default CommentedRows;
