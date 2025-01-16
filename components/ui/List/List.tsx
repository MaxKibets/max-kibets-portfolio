import clsx from "clsx";

import css from "./list.module.css";
import { ListProps } from "./types";

const List = <T,>({ items, itemRenderer }: ListProps<T>) => (
  <ul className={css.list}>
    <span className={css.prefix}>[&nbsp;</span>

    {items.map((item, index) => (
      <li
        key={index}
        className={clsx(css.item, index !== items.length - 1 && css.itemWithComma)}
      >
        {itemRenderer(item)}
      </li>
    ))}

    <span className={css.suffix}>&nbsp;]</span>
  </ul>
);

export default List;
