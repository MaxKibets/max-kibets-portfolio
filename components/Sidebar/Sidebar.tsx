"use client";

import { useToggle } from "@/hooks/useToggle";

import SidebarLayout from "./SidebarLayout";

const Sidebar = () => {
  const [expanded, toggleExpanded] = useToggle(true);

  return <SidebarLayout expanded={expanded} onFileClick={toggleExpanded} />;
};

export default Sidebar;
