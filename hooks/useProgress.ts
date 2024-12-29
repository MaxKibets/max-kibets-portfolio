"use client";

import { useEffect, useState } from "react";

const PROGRESS_STATE = {
  INITIAL: "initial",
  IN_PROGRESS: "in-progress",
  COMPLETE: "complete",
};

export const useProgress = () => {
  const [state, setState] = useState(PROGRESS_STATE.INITIAL);
  const [value, setValue] = useState(0);

  const start = () => {
    setState(PROGRESS_STATE.IN_PROGRESS);
  };

  useEffect(() => {
    const t = setInterval(
      () => {
        if (state === PROGRESS_STATE.IN_PROGRESS) {
          if (value >= 60 && value < 80) {
            setValue(value + 2);
          } else if (value >= 80 && value < 95) {
            setValue(value + 0.5);
          } else if (value >= 95) {
            setValue(95);
          } else {
            setValue(value + 5);
          }
        } else if (state === PROGRESS_STATE.COMPLETE) {
          setValue(100);
          clearInterval(t);
        }
      },
      state === PROGRESS_STATE.IN_PROGRESS ? 600 : undefined,
    );

    return () => clearInterval(t);
  }, [state, value]);

  const done = () => {
    setState(PROGRESS_STATE.COMPLETE);
  };

  const reset = () => {
    setValue(0);
    setState(PROGRESS_STATE.INITIAL);
  };

  useEffect(() => {
    let t: NodeJS.Timeout;

    if (value === 100) {
      t = setTimeout(() => {
        reset();
      }, 300);
    }

    return () => clearTimeout(t);
  }, [value]);

  return {
    state,
    value,
    start,
    done,
    reset,
  };
};
