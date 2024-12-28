import { VscLoading } from "react-icons/vsc";

import css from "./spinner.module.css";

const Spinner = () => {
  return <VscLoading className={css.spinner} />;
};

export default Spinner;
