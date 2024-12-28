import { Route } from "@/types/shared";

export type CloseClickCallback = ({
  href,
  event,
}: {
  href: Route;
  event: React.MouseEvent<HTMLButtonElement>;
}) => void;

export type TabsLayoutProps = {
  tabs: Route[];
  onCloseClick: CloseClickCallback;
};
