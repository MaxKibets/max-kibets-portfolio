import { ChangeEvent } from "react";
import { ZodObject, ZodRawShape } from "zod";

import { FIELDS } from "./constants";

export type Field = (typeof FIELDS)[number];

export type FormState = Record<Field, string>;

export type Event = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type Errors<T> = Record<keyof T, string[] | undefined | null>;

export type Register<T> = (name: keyof T) => {
  name: keyof T;
  onChange: (event: Event) => void;
  onBlur: (event: Event) => void;
};

export type FormAction = (payload: FormData) => void;

type RecatchaChangeCallback = (token: string | null) => void;

export type UseFormReturs<T> = {
  register: Register<T>;
  formAction: FormAction;
  errors: Errors<T>;
  handleReraptchaChange: RecatchaChangeCallback;
  pending: boolean;
  formData: T;
};

export type UseFormProps<T> = {
  handleSubmit: (data: T, success: boolean) => boolean | Promise<boolean>;
  initialState: Awaited<T>;
  validationSchema: ZodObject<ZodRawShape>;
};

export type ContactFormLayoutProps = Omit<
  UseFormReturs<FormState>,
  "formData" | "handleReraptchaChange"
> & { onRecaptchaChange: RecatchaChangeCallback };
