"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { usePageTransition } from "@/hooks";

import IconLabel from "../IconLabel";
import { NavLinkProps } from "./types";
import css from "./navlink.module.css";

const NavLink: FC<NavLinkProps> = ({
  href,
  underlined,
  outlined,
  className,
  text,
  prefixIcon,
  suffixIcon,
  size,
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
        [css.outlined]: outlined,
      })}
      size={size}
      text={text}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
      onClick={() => toNextPage(href)}
    />
  );
};

export default NavLink;
