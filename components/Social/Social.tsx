import { FC } from "react";
import clsx from "clsx";
import { SiGithub, SiGmail, SiLinkedin, SiTelegram } from "react-icons/si";

import css from "./social.module.css";

const Social: FC<{ className?: string }> = ({ className }) => (
  <div className={clsx(css.links, className)}>
    <a href="mailto:kibetss3@gmail.com" title="Email">
      <SiGmail />
    </a>
    <a
      href="https://www.linkedin.com/in/maksym-kibets-59776ab8/"
      title="LinkedIn"
      target="_blank"
    >
      <SiLinkedin />
    </a>
    <a href="https://t.me/Yourass_Messin" title="Telegram" target="_blank">
      <SiTelegram />
    </a>
    <a href="https://github.com/MaxKibets" title="GitHub" target="_blank">
      <SiGithub />
    </a>
  </div>
);

export default Social;
