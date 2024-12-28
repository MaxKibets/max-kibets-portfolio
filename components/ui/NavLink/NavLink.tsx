"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { NavLinkProps } from "./types";
import css from "./navlink.module.css";

const NavLink: FC<NavLinkProps> = ({
  href,
  title,
  prefixIcon,
  suffixIcon,
  onClick,
  underlined,
  indented,
  className,
}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      className={clsx(css.link, className, {
        [css.active]: isActive,
        [css.underlined]: underlined,
        [css.indented]: indented,
      })}
      href={href}
      onClick={onClick}
    >
      {prefixIcon}
      {title}
      {suffixIcon}
    </Link>
  );
};

export default NavLink;
