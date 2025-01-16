"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ROUTE } from "@/constants";
import { Href } from "@/types";
import { usePageTransition } from "@/hooks";

import TabsLayout from "./TabsLayout";
import { CloseClickCallback } from "./types";

const Tabs = () => {
  const pathname = usePathname() as Href;
  const [tabs, setTabs] = useState<Href[]>([ROUTE.MAIN]);
  const changeRoute = usePageTransition();

  useEffect(() => {
    const isTabOpened = tabs.includes(pathname);
    const isValidPath = Object.values(ROUTE).includes(pathname);

    // Add tab if not opened yet
    if (!isTabOpened && isValidPath) {
      setTabs((prevTabs) => [...prevTabs, pathname]);
    }
  }, [pathname]);

  const handleCloseTab: CloseClickCallback = ({ href, event }) => {
    event.stopPropagation();

    if (href === ROUTE.MAIN) {
      return;
    }

    // Remove tab from the list
    setTabs((prevTabs) => prevTabs.filter((tab) => tab !== href));

    // Go to the previous tab if the current one is closed
    if (href === pathname) {
      changeRoute(tabs[tabs.indexOf(href) - 1]);
    }
  };

  return <TabsLayout tabs={tabs} onCloseClick={handleCloseTab} />;
};

export default Tabs;
