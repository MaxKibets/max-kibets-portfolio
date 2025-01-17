import { CommentedRows } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import TypeWriter from "@/components/TypeWriter";

const ContactPage = () => (
  <>
    <CommentedRows>
      <h2>GET IN TOUCH</h2>
      <TypeWriter
        sequence={[
          600,
          "Let's connect! Whether you have a project in mind or just want to say hello, I'm always happy to chat.",
        ]}
        repeat={Infinity}
      />
      <p></p>
    </CommentedRows>
    <ContactForm />
  </>
);

export default ContactPage;
