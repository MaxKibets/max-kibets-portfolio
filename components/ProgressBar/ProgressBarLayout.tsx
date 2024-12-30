"use client";

import { FC } from "react";
import clsx from "clsx";

import css from "./progressBarLayout.module.css";

const ProgressBarLayout: FC<{ value: number }> = ({ value }) => (
  <div className={css.container}>
    <div
      className={clsx(css.progress, { [css.visible]: Boolean(value) })}
      style={{ width: `${value}%` }}
    />
  </div>
);

export default ProgressBarLayout;
