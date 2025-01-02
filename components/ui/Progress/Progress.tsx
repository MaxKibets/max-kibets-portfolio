"use client";

import { FC } from "react";
import clsx from "clsx";

import css from "./progress.module.css";

const Progress: FC<{ value: number }> = ({ value }) => (
  <div className={css.container}>
    <div
      className={clsx(css.progress, { [css.visible]: Boolean(value) })}
      style={{ width: `${value}%` }}
    />
  </div>
);

export default Progress;
