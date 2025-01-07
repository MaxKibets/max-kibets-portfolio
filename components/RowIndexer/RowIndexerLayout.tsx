import { FC } from "react";

import css from "./rowIndexerLayout.module.css";
import { RowIndexerLayoutProps } from "./types";

const RowIndexerLayout: FC<RowIndexerLayoutProps> = ({
  children,
  linesCount,
  containerRef,
}) => (
  <div className={css.wrap}>
    <div className={css.list}>
      {Array.from({ length: linesCount }, (_, index) => (
        <div key={index} className={css.number}>
          {index + 1}
        </div>
      ))}
    </div>
    <div ref={containerRef} className={css.content}>
      {children}
    </div>
  </div>
);

export default RowIndexerLayout;
