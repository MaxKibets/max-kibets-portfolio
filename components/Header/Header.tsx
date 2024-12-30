"use client";

import { VscCode } from "react-icons/vsc";
import css from "./header.module.css";

const Header = () => (
  <header className={css.header}>
    <VscCode className={css.logo} />
    <h1 className={css.heading}>Max Kibets portfolio</h1>
  </header>
);

export default Header;
