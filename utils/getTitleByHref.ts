import { ROUTE } from "@/constants";
import { PAGE_TITLE } from "@/constants";
import { Href } from "@/types";

export const getTitleByHref = (href: Href) => {
  const routeKey = Object.keys(ROUTE).find(
    (key) => ROUTE[key as keyof typeof ROUTE] === href,
  );

  return routeKey
    ? PAGE_TITLE[routeKey as keyof typeof PAGE_TITLE] + PAGE_TITLE.SUFFIX
    : "";
};
