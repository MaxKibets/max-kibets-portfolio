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

  useEffect(() => {
    const handlePageClick = (event: MouseEvent) => {
      const isInAside = (event.target as HTMLElement).closest("aside");
      const isLinkInAside = isInAside && (event.target as HTMLElement).closest("a");

      if ((!isInAside || isLinkInAside) && expanded) {
        setExpanded(false);
      }
    };

    if (isMob) {
      document.addEventListener("click", handlePageClick);
    }

    return () => {
      document.removeEventListener("click", handlePageClick);
    };
  }, [isMob, expanded]);

  return (
    <SidebarLayout expanded={expanded} onFileClick={() => setExpanded((prev) => !prev)} />
  );
};

export default Sidebar;
