import { Route } from "next";

import { ROUTES } from "@/constants/routes";
import { PAGE_TITLE } from "@/constants/text";

export const getTitleByHref = (href: Route) => {
  const routeKey = Object.keys(ROUTES).find(
    (key) => ROUTES[key as keyof typeof ROUTES] === href,
  );

  return routeKey
    ? PAGE_TITLE[routeKey as keyof typeof PAGE_TITLE] + PAGE_TITLE.SUFFIX
    : "";
};
