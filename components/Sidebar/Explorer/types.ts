import { WithChildren } from "@/types/shared";

export type ExplorerLayoutProps = WithChildren<{
  onClick: () => void;
  expanded: boolean;
}>;
