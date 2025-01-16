import { MouseEvent } from "react";

import { Href } from "@/types";

export type CloseClickCallback = ({
  href,
  event,
}: {
  href: Href;
  event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>;
}) => void;

export type TabsLayoutProps = {
  tabs: Href[];
  onCloseClick: CloseClickCallback;
};
