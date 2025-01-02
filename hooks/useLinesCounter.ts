import { useLayoutEffect, useRef, useState } from "react";

export const useLinesCounter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [linesCount, setLinesCount] = useState(0);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      const { height } = containerRef.current?.getBoundingClientRect() || { height: 0 };

      setLinesCount(
        height / parseFloat(window.getComputedStyle(document.body).lineHeight),
      );
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return { containerRef, linesCount };
};
