import { FC } from "react";

import css from "./list.module.css";

const List: FC<{ items: string[][] }> = ({ items }) => (
  <ul className={css.list}>
    <span className={css.prefix}>[&nbsp;</span>
    {items.map(([text, href], index) => (
      <li key={index} className={css.item}>
        <a href={href} title={text} target="_blank" className={css.link}>
          "{text}"
        </a>
        {index !== items.length - 1 && ",\u00A0"}
      </li>
    ))}

    <span className={css.suffix}>&nbsp;]</span>
  </ul>
);

export default List;
