import { Ref } from "react";

import { WithChildren } from "@/types/shared";

export type RowIndexerLayoutProps = WithChildren<{
  linesCount: number;
  containerRef: Ref<HTMLDivElement> | null;
}>;
