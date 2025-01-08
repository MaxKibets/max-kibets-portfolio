import { Ref } from "react";

import { WithChildren } from "@/types";

export type RowIndexerLayoutProps = WithChildren<{
  linesCount: number;
  containerRef: Ref<HTMLDivElement> | null;
}>;
