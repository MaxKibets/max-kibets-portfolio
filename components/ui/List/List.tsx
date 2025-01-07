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
        <li key={index} className={css.item}>
          "{itemRenderer ? itemRenderer(item) : item}"
          {index !== items.length - 1 && ",\u00A0"}
        </li>
      );
    })}

    <span className={css.suffix}>&nbsp;]</span>
  </ul>
);

export default List;
