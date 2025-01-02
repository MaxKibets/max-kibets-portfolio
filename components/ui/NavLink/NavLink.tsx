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
  const toNextPage = usePageTransition();
  
  return (
    <IconLabel
      // Do not use next/link here, because we want to use the custom transition
      tag="a"
      className={clsx(className, {
        [css.active]: href === pathname,
        [css.underlined]: underlined,
      })}
      indented={indented}
      text={text}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
      onClick={() => toNextPage(href)}
    />
  );
};

export default NavLink;
