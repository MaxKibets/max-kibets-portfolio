"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { usePageTransition } from "@/hooks/usePageTransition";

import IconLabel from "../IconLabel";
import { NavLinkProps } from "./types";
import css from "./navlink.module.css";

const NavLink: FC<NavLinkProps> = ({
  href,
  underlined,
  className,
  text,
  prefixIcon,
  suffixIcon,
  indented,
}) => {
  const pathname = usePathname();
  const changeRoute = usePageTransition();

  return (
    <IconLabel
      tag="a"
      className={clsx(className, {
        [css.active]: href === pathname,
        [css.underlined]: underlined,
      })}
      indented={indented}
      text={text}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
      onClick={() => changeRoute(href)}
    />
  );
};

export default NavLink;
