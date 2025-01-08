import { WithChildren } from "@/types";

export type SidebarLayoutProps = WithChildren<{
  onFileClick: () => void;
  expanded: boolean;
}>;
