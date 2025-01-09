import { Button, Input, Label, Textarea } from "@/components/ui";

import css from "./contactFormLayout.module.css";

const FIELDS = ["name", "email", "message"] as const;

const ContactForm = () => (
  <form className={css.form}>
    {FIELDS.map((field) => (
      <div key={field} className={css.row}>
        <Label htmlFor={field} className={css.label}>
          {field}
        </Label>
        {field === "message" ? (
          <Textarea
            rows={4}
            id="message"
            className={css.input}
            placeholder={`enter your ${field}`}
          />
        ) : (
          <Input
            type="text"
            id={field}
            className={css.input}
            placeholder={`enter your ${field}`}
          />
        )}
      </div>
    ))}
    <Button title="Click to send your message" outlined className={css.button}>
      SEND
    </Button>
  </form>
);

export default ContactForm;
