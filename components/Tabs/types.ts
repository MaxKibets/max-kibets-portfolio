import { MouseEvent } from "react";

import { Route } from "@/types";

export type CloseClickCallback = ({
  href,
  event,
}: {
  href: Route;
  event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>;
}) => void;

export type TabsLayoutProps = {
  tabs: Route[];
  onCloseClick: CloseClickCallback;
};
