import { FC, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

import css from "./textarea.module.css";

const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => <textarea className={clsx(css.textarea, className)} {...props} />;

export default Textarea;
