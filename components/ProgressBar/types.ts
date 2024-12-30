import { Dispatch, SetStateAction } from "react";
import { PROGRESS_STATE } from "./constants";

export type ProgressStateType = (typeof PROGRESS_STATE)[keyof typeof PROGRESS_STATE];

export type ProgressBarContextType = null | Dispatch<SetStateAction<ProgressStateType>>;
