import clsx from "clsx";
import { FC, JSX } from "react";

import css from "./list.module.css";

const List: FC<{
  items: string[][] | string[];
  itemRenderer?: (props: any) => JSX.Element;
}> = ({ items, itemRenderer }) => (
  <ul className={css.list}>
    <span className={css.prefix}>[&nbsp;</span>

    {items.map((item, index) => {
      return (
        <li
          key={index}
          className={clsx(css.item, index !== items.length - 1 && css.itemWithComma)}
        >
          "{itemRenderer ? itemRenderer(item) : item}"
        </li>
      );
    })}

    <span className={css.suffix}>&nbsp;]</span>
  </ul>
);

export default List;
