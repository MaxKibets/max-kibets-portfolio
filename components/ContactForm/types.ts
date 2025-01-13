import { ChangeEvent } from "react";

import { ZodObject, ZodRawShape } from "zod";
import { FIELDS } from "./constants";

export type Field = (typeof FIELDS)[number];

export type FormState = Record<Field, string>;

export type Event = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type Errors<T> = Record<keyof T, string[] | undefined>;

export type Register<T> = (name: keyof T) => {
  name: keyof T;
  onChange: (event: Event) => void;
  onBlur: (event: Event) => void;
};

export type FormAction = (payload: FormData) => void;

export type UseFormReturs<T> = {
  formAction: FormAction;
  pending: boolean;
  formData: T;
  errors: Errors<T>;
  register: Register<T>;
};

export type UseFormProps<T> = {
  handleSubmit: (data: T, success: boolean) => boolean | Promise<boolean>;
  initialState: Awaited<T>;
  validationSchema: ZodObject<ZodRawShape>;
};
