import { FC } from "react";
import { VscSourceControl, VscSync, VscError, VscWarning } from "react-icons/vsc";

import { IconLabel } from "@/components/ui";

import css from "./footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={css.footer}>
      <IconLabel
        prefixIcon={<VscSourceControl />}
        text="master*"
        suffixIcon={<VscSync />}
      />
      <IconLabel prefixIcon={<VscError />} text="0" />
      <IconLabel prefixIcon={<VscWarning />} text="0" />
    </footer>
  );
};

export default Footer;
