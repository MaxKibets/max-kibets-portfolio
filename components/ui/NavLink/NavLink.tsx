"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";

import { usePageTransition } from "@/hooks";

import { NavLinkProps } from "./types";
import Action from "../Action";

const NavLink: FC<NavLinkProps> = ({ children, href, className, variant }) => {
  const pathname = usePathname();
  const toNextPage = usePageTransition();

  return (
    <Action
      href={href}
      onClick={(e) => {
        e.preventDefault();
        toNextPage(href);
      }}
      active={href === pathname}
      variant={variant}
      className={className}
    >
      {children}
    </Action>
  );
};

export default NavLink;
