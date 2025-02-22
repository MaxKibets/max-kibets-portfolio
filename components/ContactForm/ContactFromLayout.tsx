import { FC } from "react";
import clsx from "clsx";
import ReCAPTCHA from "react-google-recaptcha";

import { Action, Input, Label, Textarea, Error } from "@/components/ui";

import { FIELDS, RECAPTCHA_FIELD_NAME } from "./constants";
import { ContactFormLayoutProps } from "./types";
import css from "./contactFormLayout.module.css";
import { ACTION_VARIANT } from "@/constants";

const ContactFormLayout: FC<ContactFormLayoutProps> = ({
  register,
  formAction,
  errors,
  onRecaptchaChange,
  pending,
}) => (
  <form className={css.form} action={formAction}>
    {FIELDS.slice(1, 4).map((field) => (
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
    <div className={css.actions}>
      <div className={css.recaptchaWrap}>
        <ReCAPTCHA
          onChange={onRecaptchaChange}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          theme="dark"
          badge="bottomleft"
          className={css.recaptcha}
        />
        {errors[RECAPTCHA_FIELD_NAME] && <Error>{errors[RECAPTCHA_FIELD_NAME]}</Error>}
      </div>
      <Action
        type="submit"
        title="Click to send your message"
        variant={ACTION_VARIANT.OUTLINED}
        className={css.button}
        disabled={pending}
      >
        submit
      </Action>
    </div>
  </form>
);

export default ContactFormLayout;
