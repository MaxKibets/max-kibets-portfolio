import { useActionState, useState } from "react";
import { Errors, UseFormProps, UseFormReturs, Event } from "./types";

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

    await handleSubmit(fieldValues, success);

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
    const { fieldErrors } = error?.flatten() || { fieldErrors: { [name]: "" } };

    setErrors((prevErrors) => ({ ...prevErrors, ...fieldErrors }));
  };

  const register = (name: keyof T) => ({
    name,
    onChange: handleChange,
    onBlur: handleBlur,
    value: formData[name],
  });

  return { formData, errors, register, formAction, pending };
};
