import { z } from "zod";

import { FormState } from "./types";

export const RECAPTCHA_FIELD_NAME = "g-recaptcha-response" as const;

export const FIELDS = [RECAPTCHA_FIELD_NAME, "name", "email", "message"] as const;

export const INITIAL_STATE = FIELDS.reduce(
  (acc, field) => ({ ...acc, [field]: "" }),
  {} as FormState,
);

export const VALIDATION_SCHEMA = z.object({
  [FIELDS[0]]: z.string().nonempty("Recaptcha is required"),
  [FIELDS[1]]: z.string().nonempty("Name is required"),
  [FIELDS[2]]: z.string().email("Invalid email").nonempty("Email is required"),
  [FIELDS[3]]: z.string().nonempty("Message is required"),
});

export const FORMSPARK_ACTION_URL = "https://submit-form.com/L4V72d4o8";
