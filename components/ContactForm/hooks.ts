import { useActionState, useState } from "react";

import { Errors, UseFormProps, UseFormReturs, Event } from "./types";
import { RECAPTCHA_FIELD_NAME } from "./constants";

export const useForm = <T extends Record<string, string>>({
  handleSubmit,
  initialState,
  validationSchema,
}: UseFormProps<T>): UseFormReturs<T> => {
  const [, formAction, pending] = useActionState(onSubmit, initialState);
  const [errors, setErrors] = useState({} as Errors<T>);
  const [formData, setFormData] = useState(initialState);

  async function onSubmit(_: Awaited<T>, formData: FormData): Promise<T> {
    const fieldValues = Object.fromEntries(formData) as T;
    const { success, error } = validationSchema.safeParse(fieldValues);

    if (error) {
      setErrors(error.flatten().fieldErrors as Errors<T>);
    }

    const submited = await handleSubmit(fieldValues, success);

    if (submited) {
      setFormData(initialState); // reset form
    }

    return fieldValues;
  }

  const handleChange = (event: Event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event: Event) => {
    const { name, value } = event.target;
    const { error } = validationSchema
      .pick({ [name]: true })
      .safeParse({ [name]: value });
    const { fieldErrors } = error?.flatten() || { fieldErrors: { [name]: null } };

    setErrors((prevErrors) => ({ ...prevErrors, ...fieldErrors }));
  };

  const handleReraptchaChange = (token: string | null) => {
    if (token) {
      setFormData((prev) => ({ ...prev, [RECAPTCHA_FIELD_NAME]: token }));
      setErrors((prevErrors) => ({ ...prevErrors, [RECAPTCHA_FIELD_NAME]: null }));
    }
  };

  const register = (name: keyof T) => ({
    name,
    onChange: handleChange,
    onBlur: handleBlur,
    value: formData[name],
  });

  return { formData, errors, register, handleReraptchaChange, formAction, pending };
};
