"use client";

import { createContext, FC } from "react";

import { WithChildren } from "@/types/shared";

import ProgressBarLayout from "./ProgressBarLayout";
import { useProgress } from "./hooks";
import { ProgressBarContextType } from "./types";

export const ProgressBarContext = createContext<ProgressBarContextType>(null);

const ProgressBar: FC<WithChildren> = ({ children }) => {
  const { setProgressState, value } = useProgress();

  return (
    <ProgressBarContext.Provider value={setProgressState}>
      <ProgressBarLayout value={value} />
      {children}
    </ProgressBarContext.Provider>
  );
};

export default ProgressBar;