import HomeContainer from "@/components/HomeContainer";
import TypeWriter from "@/components/TypeWriter";
import { CommentedRows, Heading, NavLink, Paragraph, Group } from "@/components/ui";
import { ACTION_VARIANT, PAGE_TITLE, ROUTE } from "@/constants";

export default function Home() {
  return (
    <HomeContainer>
      <CommentedRows>
        <h2>Max Kibets - Frontend Developer</h2>
        <p>
          <TypeWriter
            sequence={[
              800,
              "Passionate about building web apps that are impactful",
              1500,
              "Passionate about building web apps that are scalable",
              1500,
              "Passionate about building web apps that are high-quality",
              1000,
            ]}
            repeat={Infinity}
          />
        </p>
      </CommentedRows>
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
            {PAGE_TITLE.SKILLS}
          </NavLink>
          <NavLink href={ROUTE.EXPERIENCE} variant={ACTION_VARIANT.OUTLINED}>
            {PAGE_TITLE.EXPERIENCE}
          </NavLink>
          <NavLink href={ROUTE.CONTACT} variant={ACTION_VARIANT.OUTLINED}>
            {PAGE_TITLE.CONTACT}
          </NavLink>
        </Group>
      </section>
    </HomeContainer>
  );
}
