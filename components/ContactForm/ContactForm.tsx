"use client";

import { useForm } from "./hooks";
import { FormState } from "./types";
import ContactFormLayout from "./ContactFromLayout";
import { FORMSPARK_ACTION_URL, INITIAL_STATE, VALIDATION_SCHEMA } from "./constants";

const handleSubmit = async (data: FormState, success: boolean) => {
  console.log("formData", JSON.stringify(data), success);

  await fetch(FORMSPARK_ACTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
};

const ContactForm = () => {
  const { register, formAction, errors } = useForm<FormState>({
    handleSubmit,
    initialState: INITIAL_STATE,
    validationSchema: VALIDATION_SCHEMA,
  });

  return (
    <ContactFormLayout register={register} formAction={formAction} errors={errors} />
  );
};

export default ContactForm;
