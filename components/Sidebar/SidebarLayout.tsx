import { FC } from "react";
import clsx from "clsx";
import { VscDebugAlt, VscFiles } from "react-icons/vsc";

import Explorer from "./Explorer";
import css from "./sidebarLayout.module.css";
import { SidebarLayoutProps } from "./types";

const SidebarLayout: FC<SidebarLayoutProps> = ({ expanded, onFileClick }) => (
  <aside className={css.sidebar}>
    <div className={css.altWrap}>
      <div className={clsx(css.alt, { [css.active]: expanded })} onClick={onFileClick}>
        <VscFiles className={clsx(css.alt, { [css.active]: expanded })} />
      </div>
      <div className={css.alt}>
        <VscDebugAlt className={css.altIcon} />
      </div>
    </div>
    <div className={clsx(css.explorer, { [css.expanded]: expanded })}>
      <Explorer />
    </div>
  </aside>
);

export default SidebarLayout;
