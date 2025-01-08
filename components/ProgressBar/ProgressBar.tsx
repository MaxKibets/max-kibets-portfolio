"use client";

import { createContext, FC } from "react";

import { WithChildren } from "@/types";
import { Progress } from "@/components/ui";

import { useProgress } from "./hooks";
import { ProgressBarContextType } from "./types";

export const ProgressBarContext = createContext<ProgressBarContextType>(null);

const ProgressBar: FC<WithChildren> = ({ children }) => {
  const { setProgressState, value } = useProgress();

  return (
    <ProgressBarContext.Provider value={setProgressState}>
      <Progress value={value} />
      {children}
    </ProgressBarContext.Provider>
  );
};

export default ProgressBar;
