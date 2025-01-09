import { Input, Label, Textarea } from "@/components/ui";

const ContactForm = () => (
  <form>
    <div>
      <Label htmlFor="name">Name</Label>
      <Input type="text" id="name" />
    </div>
    <div>
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" />
    </div>
    <div>
      <Label htmlFor="message">Message</Label>
      <Textarea rows={4} id="message" />
    </div>
    <button type="submit">Send</button>
  </form>
);

export default ContactForm;
