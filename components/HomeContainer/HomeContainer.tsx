import { FC } from "react";
import Image from "next/image";
import { VscSave } from "react-icons/vsc";

import { WithChildren } from "@/types";
import { Action, IconLabel } from "@/components/ui";
import Social from "@/components/Social";
import { ACTION_VARIANT, CV_HREF } from "@/constants";

import css from "./homeContainer.module.css";

const HomeLayout: FC<WithChildren> = ({ children }) => (
  <article className={css.wrap}>
    <div className={css.sidebar}>
      <Image
        src="/photo.jpg"
        alt="Max Kibets"
        width={148}
        height={148}
        className={css.photo}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvHzNfwAG4gL34mYCRwAAAABJRU5ErkJggg=="
      />
      <Action
        href={CV_HREF}
        target="_blank"
        variant={ACTION_VARIANT.FILLED}
        prefetch={false}
      >
        <IconLabel prefixIcon={<VscSave />} text="download cv" />
      </Action>
      <Social />
    </div>
    {children}
  </article>
);

export default HomeLayout;
