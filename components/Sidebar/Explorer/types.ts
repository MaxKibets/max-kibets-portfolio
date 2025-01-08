import { WithChildren } from "@/types";

export type ExplorerLayoutProps = WithChildren<{
  onClick: () => void;
  expanded: boolean;
}>;
