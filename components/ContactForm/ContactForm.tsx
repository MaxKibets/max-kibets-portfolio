"use client";

import { NOTIF_TYPE } from "@/constants";
import { showNotification } from "@/utils";

import { useForm } from "./hooks";
import { FormState } from "./types";
import ContactFormLayout from "./ContactFromLayout";
import { FORMSPARK_ACTION_URL, INITIAL_STATE, VALIDATION_SCHEMA } from "./constants";

const handleSubmit = async (data: FormState, success: boolean) => {
  if (!success) {
    return false;
  }

  try {
    const response = await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      showNotification("Not sent, try again later");
      return false;
    }
  } catch {
    showNotification("Not sent, no connection");
    return false;
  }

  showNotification("Successfully sent", NOTIF_TYPE.SUCCESS);

  return true;
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
