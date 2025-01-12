import { FC } from "react";
import clsx from "clsx";

import { Button, Input, Label, Textarea, Error } from "@/components/ui";

import css from "./contactFormLayout.module.css";
import { FIELDS } from "./constants";
import { Errors, FormAction, FormState, Register } from "./types";

const ContactFormLayout: FC<{
  register: Register<FormState>;
  formAction: FormAction;
  errors: Errors<FormState>;
}> = ({ register, formAction, errors }) => (
  <form className={css.form} action={formAction}>
    {FIELDS.map((field) => (
      <div key={field} className={clsx(css.row, { [css.error]: errors[field] })}>
        <Label htmlFor={field} className={css.label}>
          {field}
        </Label>
        {field === FIELDS.at(-1) ? (
          <Textarea
            rows={4}
            id={field}
            className={css.input}
            placeholder={`enter your ${field}`}
            {...register(field)}
          />
        ) : (
          <Input
            type="text"
            id={field}
            className={css.input}
            placeholder={`enter your ${field}`}
            {...register(field)}
          />
        )}
        {errors[field] && <Error>{errors[field].at(-1)}</Error>}
      </div>
    ))}
    <Button
      type="submit"
      title="Click to send your message"
      outlined
      className={css.button}
    >
      SEND
    </Button>
  </form>
);

export default ContactFormLayout;
