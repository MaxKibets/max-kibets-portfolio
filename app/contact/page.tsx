import { CommentedRows } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => (
  <>
    <CommentedRows>
      <h2>GET IN TOUCH</h2>
      <p>
        Let’s connect! Whether you have a project in mind or just want to say hello, I’m
        always happy to chat
      </p>
    </CommentedRows>
    <ContactForm />
  </>
);

export default ContactPage;
