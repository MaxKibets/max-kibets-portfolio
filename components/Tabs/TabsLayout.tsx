import { FC } from "react";
import clsx from "clsx";
import { VscClose, VscFileCode, VscPinned } from "react-icons/vsc";

import { ACTION_VARIANT, ROUTE } from "@/constants";
import { Action, IconLabel, NavLink } from "@/components/ui";
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
            className={clsx(css.tab, { [css.pinned]: isMain })}
            variant={ACTION_VARIANT.UNDERLINED}
          >
            <IconLabel
              text={getTitleByHref(href)}
              prefixIcon={<VscFileCode />}
              suffixIcon={
                <Action
                  title={isMain ? TEXT.PINNED : TEXT.CLOSE}
                  disabled={isMain}
                  onClick={(event) => {
                    event.preventDefault();

                    onCloseClick({ href, event });
                  }}
                  variant={ACTION_VARIANT.SHADED}
                >
                  {isMain ? <VscPinned /> : <VscClose />}
                </Action>
              }
            />
          </NavLink>
        );
      })}
    </div>
  </div>
);

export default TabsLayout;
