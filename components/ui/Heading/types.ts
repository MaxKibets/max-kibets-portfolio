import { HEADING_LEVEL } from "@/constants";
import { WithChildren } from "@/types";

export type HeadingProps = WithChildren<{
  level?: (typeof HEADING_LEVEL)[keyof typeof HEADING_LEVEL];
}>;
