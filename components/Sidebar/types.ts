import { WithChildren } from "@/types/shared";

export type SidebarLayoutProps = WithChildren<{
  onFileClick: () => void;
  expanded: boolean;
}>;
