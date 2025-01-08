"use client";

import { FC, useLayoutEffect, useRef, useState } from "react";

import { WithChildren } from "@/types";

import RowIndexerLayout from "./RowIndexerLayout";

const RowIndexer: FC<WithChildren> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [linesCount, setLinesCount] = useState(0);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      const { height } = containerRef.current?.getBoundingClientRect() || { height: 0 };

      setLinesCount(
        height / parseFloat(window.getComputedStyle(document.body).lineHeight),
      );
    });

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <RowIndexerLayout linesCount={linesCount} containerRef={containerRef}>
      {children}
    </RowIndexerLayout>
  );
};

export default RowIndexer;
