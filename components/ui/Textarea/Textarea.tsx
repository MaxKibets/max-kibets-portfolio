import { FC, TextareaHTMLAttributes } from "react";

import css from "./textarea.module.css";

const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea className={css.textarea} {...props} />
);

export default Textarea;
