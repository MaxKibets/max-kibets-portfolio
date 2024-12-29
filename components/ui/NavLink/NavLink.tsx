"use client";

import { FC, startTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

import { NavLinkProps } from "./types";
import css from "./navlink.module.css";
import IconLabel from "../IconLabel";

const NavLink: FC<NavLinkProps> = ({
  href,
  onClick,
  underlined,
  className,
  text,
  prefixIcon,
  suffixIcon,
  indented,
}) => {
  const { push } = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    onClick?.();
    href && startTransition(() => push(href));
  };

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
      onClick={handleClick}
    />
  );
};

export default NavLink;
