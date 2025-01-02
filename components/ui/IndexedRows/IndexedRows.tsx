"use client";

import { FC } from "react";

import { WithChildren } from "@/types/shared";
import { useLinesCounter } from "@/hooks/useLinesCounter";

import css from "./indexedRows.module.css";

const IndexedRows: FC<WithChildren> = ({ children }) => {
  const { containerRef, linesCount } = useLinesCounter();

  return (
    <div className={css.wrap}>
      <div className={css.list}>
        {Array.from({ length: linesCount }, (_, index) => (
          <div key={index} className={css.number}>
            {index + 1}
          </div>
        ))}
      </div>
      <div ref={containerRef}>{children}</div>
    </div>
  );
};

export default IndexedRows;
