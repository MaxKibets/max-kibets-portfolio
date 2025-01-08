"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import SidebarLayout from "./SidebarLayout";

const Sidebar = () => {
  const isMob = useMediaQuery({ query: "(max-width: 1024px)" });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(!isMob);
  }, [isMob]);

  return (
    <SidebarLayout expanded={expanded} onFileClick={() => setExpanded((prev) => !prev)} />
  );
};

export default Sidebar;
