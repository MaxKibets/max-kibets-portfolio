import { HEADING_LEVEL, HEADING_PREFIX, HEADING_SUFFIX } from "@/constants";
import { WithChildren } from "@/types";

export type HeadingProps = WithChildren<{
  prefix?: (typeof HEADING_PREFIX)[keyof typeof HEADING_PREFIX];
  suffix?: (typeof HEADING_SUFFIX)[keyof typeof HEADING_SUFFIX];
  level?: (typeof HEADING_LEVEL)[keyof typeof HEADING_LEVEL];
}>;
