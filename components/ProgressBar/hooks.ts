"use client";

import { useContext, useEffect, useState } from "react";

import { ProgressBarContext } from "./ProgressBar";
import { PROGRESS_STATE } from "./constants";
import { ProgressStateType } from "./types";

export const useProgressBarContext = () => {
  const context = useContext(ProgressBarContext);

  if (!context) {
    throw new Error(
      "usePageTransitionProgressContext must be used within a PageTransitionProgressProvider",
    );
  }

  return context;
};

export const useProgress = () => {
  const [progressState, setProgressState] = useState<ProgressStateType>(
    PROGRESS_STATE.INITIAL,
  );
  const [value, setValue] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => {
        if (progressState === PROGRESS_STATE.IN_PROGRESS) {
          if (value >= 60 && value < 80) {
            setValue(value + 2);
          } else if (value >= 80 && value < 95) {
            setValue(value + 0.5);
          } else if (value >= 95) {
            setValue(95);
          } else {
            setValue(value + 5);
          }
        } else if (progressState === PROGRESS_STATE.COMPLETE) {
          setValue(100);
          clearInterval(t);
        }
      },
      progressState === PROGRESS_STATE.IN_PROGRESS ? 200 : undefined,
    );

    return () => clearInterval(t);
  }, [progressState, value]);

  useEffect(() => {
    let t: NodeJS.Timeout;

    if (value === 100) {
      t = setTimeout(() => {
        setValue(0);
        setProgressState(PROGRESS_STATE.INITIAL);
      }, 300);
    }

    return () => clearTimeout(t);
  }, [value]);

  return {
    value,
    setProgressState,
  };
};
