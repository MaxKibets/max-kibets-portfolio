import { FC } from "react";
import clsx from "clsx";
import { VscClose, VscFileCode, VscPinned } from "react-icons/vsc";

import { ROUTE, SIZE } from "@/constants/shared";
import { Button, NavLink } from "@/components/ui";
import { getTitleByHref } from "@/utils";

import { TabsLayoutProps } from "./types";
import css from "./tabsLayout.module.css";

const TEXT = {
  CLOSE: "Close",
  PINNED: "Pinned",
};

const TabsLayout: FC<TabsLayoutProps> = ({ tabs, onCloseClick }) => (
  <div className={css.wrap}>
    <div className={css.tabs}>
      {tabs.map((href) => {
        const isMain = href === ROUTE.MAIN;

        return (
          <NavLink
            key={href}
            href={href}
            text={getTitleByHref(href)}
            prefixIcon={<VscFileCode />}
            suffixIcon={
              <Button
                title={isMain ? TEXT.PINNED : TEXT.CLOSE}
                disabled={isMain}
                onClick={(event) => onCloseClick({ href, event })}
              >
                {isMain ? <VscPinned /> : <VscClose />}
              </Button>
            }
            className={clsx({ [css.pinned]: isMain })}
            underlined
            size={SIZE.LARGE}
          />
        );
      })}
    </div>
  </div>
);

export default TabsLayout;
