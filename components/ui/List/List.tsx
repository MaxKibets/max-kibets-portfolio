import clsx from "clsx";

import css from "./list.module.css";
import { ListProps } from "./types";

const List = <T,>({ items, itemRenderer }: ListProps<T>) => (
  <ul className={css.list}>
    {items.map((item, index) => (
      <li
        key={index}
        className={clsx(css.item, index !== items.length - 1 && css.withComma)}
      >
        {itemRenderer(item)}
      </li>
    ))}
  </ul>
);

export default List;
