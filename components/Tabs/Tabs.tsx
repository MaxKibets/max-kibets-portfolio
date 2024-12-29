"use client";

import { useEffect, useState } from "react";
import { redirect, usePathname } from "next/navigation";

import { ROUTES } from "@/constants/routes";
import { Route } from "@/types/shared";
import TabsLayout from "./TabsLayout";
import { CloseClickCallback } from "./types";

const Tabs = () => {
  const pathname = usePathname() as Route;
  const [tabs, setTabs] = useState<Route[]>([ROUTES.MAIN]);

  useEffect(() => {
    const isTabOpened = tabs.includes(pathname);
    const isValidPath = Object.values(ROUTES).includes(pathname);

    // Add tab if not opened yet
    if (!isTabOpened && isValidPath) {
      setTabs((prevTabs) => [...prevTabs, pathname]);
    }
  }, [pathname]);

  const handleCloseTab: CloseClickCallback = ({ href, event }) => {
    event.stopPropagation();

    if (href === ROUTES.MAIN) {
      return;
    }

    // Remove tab from the list
    setTabs((prevTabs) => prevTabs.filter((tab) => tab !== href));

    // Go to the previous tab if the current one is closed
    if (href === pathname) {
      redirect(tabs[tabs.indexOf(href) - 1]);
    }
  };

  return <TabsLayout tabs={tabs} onCloseClick={handleCloseTab} />;
};

export default Tabs;
