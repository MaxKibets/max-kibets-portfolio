"use client";

import { VscPass } from "react-icons/vsc";

import { NOTIF_TYPE } from "@/constants";
import { showNotification } from "@/utils";
import { verifyRecaptcha } from "@/actions/verifyRecaptcha";

import { useForm } from "./hooks";
import { FormState } from "./types";
import ContactFormLayout from "./ContactFromLayout";
import {
  FORMSPARK_ACTION_URL,
  RECAPTCHA_FIELD_NAME,
  INITIAL_STATE,
  VALIDATION_SCHEMA,
} from "./constants";

const handleSubmit = async (data: FormState, success: boolean) => {
  if (!success) {
    return false;
  }

  const recaptchaSuccess = await verifyRecaptcha(data[RECAPTCHA_FIELD_NAME]);

  if (!recaptchaSuccess) {
    showNotification({ message: "Recaptcha failed" });
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
      showNotification({ message: "Not sent, try again later" });
      return false;
    }
  } catch {
    showNotification({ message: "Not sent, no connection" });
    return false;
  }

  showNotification({
    message: "Successfully sent",
    type: NOTIF_TYPE.SUCCESS,
    icon: <VscPass />,
  });
  return true;
};

const ContactForm = () => {
  const { register, handleReraptchaChange, formAction, errors } = useForm<FormState>({
    handleSubmit,
    initialState: INITIAL_STATE,
    validationSchema: VALIDATION_SCHEMA,
  });

  return (
    <ContactFormLayout
      register={register}
      formAction={formAction}
      errors={errors}
      onRecaptchaChange={handleReraptchaChange}
    />
  );
};

export default ContactForm;
