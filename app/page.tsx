import Image from "next/image";

import { CommentedRows, Heading, NavLink, Paragraph, Group } from "@/components/ui";
import { ACTION_VARIANT, ROUTE } from "@/constants";

import css from "./home.module.css";

export default function Home() {
  return (
    <article className={css.wrap}>
      <CommentedRows>
        <h2>Max Kibets - Frontend Developer</h2>
        <p>Passionate about building web applications that are scalable and impactful</p>
      </CommentedRows>
      <div className={css.sidebar}>
        <Image
          src="/photo.jpg"
          alt="Max Kibets"
          width={148}
          height={148}
          className={css.photo}
        />
        {/* <NavLink href={"/Maksym_Kibets_CV.pdf"} target="_blank" outlined>
          DOWNLOAD CV
        </NavLink> */}
      </div>
      <section>
        <Heading>GREETING</Heading>
        <Paragraph>
          Hi there! Welcome to my digital corner. Here, I craft modern, scalable web
          applications with a dash of creativity and a focus on seamless user experiences
        </Paragraph>
      </section>
      <section>
        <Heading>INTODUCTION</Heading>
        <Paragraph>
          For over 7 years, I&apos;ve been diving deep into the world of modern web
          technologies, turning creative ideas into reality
        </Paragraph>
      </section>
      <section>
        <Heading>WHY_ME</Heading>
        <Paragraph>
          I’m more than just a coder — I’m someone who listens, learns, and adapts.
          Whether you’re launching a new project or improving an existing one, I bring
          curiosity, precision, and a healthy dose of enthusiasm to every task. Together,
          let’s build something extraordinary
        </Paragraph>
      </section>
      <section>
        <CommentedRows>
          Click to get more information about me or to get in touch
        </CommentedRows>
        <Group>
          <NavLink href={ROUTE.SKILLS} variant={ACTION_VARIANT.OUTLINED}>
            MY SKILLS
          </NavLink>
          <NavLink href={ROUTE.EXPERIENCE} variant={ACTION_VARIANT.OUTLINED}>
            MY EXPERIENCE
          </NavLink>
          <NavLink href={ROUTE.CONTACT} variant={ACTION_VARIANT.OUTLINED}>
            GET IN TOUCH
          </NavLink>
        </Group>
      </section>
    </article>
  );
}
