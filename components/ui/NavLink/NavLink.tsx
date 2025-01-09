"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { usePageTransition } from "@/hooks";

import { NavLinkProps } from "./types";
import css from "./navlink.module.css";

const NavLink: FC<NavLinkProps> = ({
  children,
  href,
  underlined,
  outlined,
  className,
}) => {
  const pathname = usePathname();
  const toNextPage = usePageTransition();

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        toNextPage(href);
      }}
      className={clsx(css.link, className, {
        [css.active]: href === pathname,
        [css.underlined]: underlined,
        [css.outlined]: outlined,
      })}
    >
      {children}
    </a>
  );
};

export default NavLink;
