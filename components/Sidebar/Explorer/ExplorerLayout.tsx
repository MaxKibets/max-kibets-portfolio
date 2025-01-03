import { FC } from "react";
import {
  VscCollapseAll,
  VscExpandAll,
  VscFileCode,
  VscFolder,
  VscFolderOpened,
} from "react-icons/vsc";
import clsx from "clsx";

import { Button, IconLabel, NavLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { getTitleByHref } from "@/utils";

import { ExplorerLayoutProps } from "./types";
import css from "./explorerLayout.module.css";

const TEXT = {
  EXPLORER: "EXPLORER: PORTFOLIO",
  COLLAPS: "Collapse folder",
  EXPAND: "Expand folder",
  PAGES: "pages",
};

const ExplorerLayout: FC<ExplorerLayoutProps> = ({ onClick, expanded }) => (
  <>
    <div className={css.title}>
      <span>{TEXT.EXPLORER}</span>
      <Button onClick={onClick} title={expanded ? TEXT.COLLAPS : TEXT.EXPAND}>
        {expanded ? <VscCollapseAll /> : <VscExpandAll />}
      </Button>
    </div>
    <IconLabel
      onClick={onClick}
      prefixIcon={expanded ? <VscFolderOpened /> : <VscFolder />}
      text={TEXT.PAGES}
    />
    <nav className={clsx(css.nav, { [css.expanded]: expanded })}>
      <ul className={css.list}>
        {Object.values(ROUTES).map((href) => (
          <li key={href}>
            <NavLink
              href={href}
              prefixIcon={<VscFileCode />}
              text={getTitleByHref(href)}
            />
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export default ExplorerLayout;
