import { Route } from "next";

import { ROUTE } from "@/constants/shared";
import { PAGE_TITLE } from "@/constants/shared";

export const getTitleByHref = (href: Route) => {
  const routeKey = Object.keys(ROUTE).find(
    (key) => ROUTE[key as keyof typeof ROUTE] === href,
  );

  return routeKey
    ? PAGE_TITLE[routeKey as keyof typeof PAGE_TITLE] + PAGE_TITLE.SUFFIX
    : "";
};
