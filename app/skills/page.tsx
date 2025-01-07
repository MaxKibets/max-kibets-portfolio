import { CommentedRows, Heading, List } from "@/components/ui";

const STACK = {
  GENERAL: [
    ["Javascript", "https://en.wikipedia.org/wiki/JavaScript"],
    ["React", "https://react.dev/"],
    ["Next.js", "https://nextjs.org/"],
    ["Typescript", "https://www.typescriptlang.org/"],
    ["HTML5", "https://en.wikipedia.org/wiki/HTML5"],
    ["CSS3", "https://en.wikipedia.org/wiki/CSS"],
    ["Sass", "https://sass-lang.com/"],
  ],
  ADDITIONAL: [
    ["Apollo GraphQL", "https://www.apollographql.com/"],
    ["Zustand", "https://zustand.docs.pmnd.rs/"],
    ["Redux", "https://redux.js.org/"],
    ["React Router", "https://reactrouter.com/"],
    ["TailwindCSS", "https://tailwindcss.com/"],
    ["MaterialUI", "https://mui.com/"],
    ["Jest", "https://jestjs.io/"],
    ["React testing library", "https://testing-library.com"],
  ],
  TOOLS: [
    ["Git", "https://git-scm.com/"],
    ["Bash", "https://en.wikipedia.org/wiki/Bash_(Unix_shell)"],
    ["Docker", "https://www.docker.com/"],
    ["Webpack", "https://webpack.js.org/"],
    ["Eslint", "https://eslint.org/"],
    ["NPM", "https://www.npmjs.com/"],
    ["Yarn", "https://yarnpkg.com/"],
  ],
};

const SkillsPage = () => {
  return (
    <article>
      <CommentedRows>
        <h2>TECH STACK</h2>
        <p>
          A showcase of the tools and technologies I use to bring ideas to life
          <br />
          efficiently, creatively, and with a focus on quality
        </p>
      </CommentedRows>
      <section>
        <Heading>GENERAL</Heading>
        <List items={STACK.GENERAL} />
      </section>
      <section>
        <Heading>ADDITIONAL</Heading>
        <List items={STACK.ADDITIONAL} />
      </section>
      <section>
        <Heading>TOOLS</Heading>
        <List items={STACK.TOOLS} />
      </section>
    </article>
  );
};

export default SkillsPage;
