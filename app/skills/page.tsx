import { JSX } from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiApollographql,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiMaterialdesign,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiGnubash,
  SiDocker,
  SiWebpack,
  SiEslint,
  SiNpm,
  SiYarn,
} from "react-icons/si";

import { CommentedRows, Heading, IconLabel, List } from "@/components/ui";

const STACK = {
  GENERAL: [
    ["Javascript", "https://en.wikipedia.org/wiki/JavaScript", <SiJavascript key="js" />],
    ["React", "https://react.dev/", <SiReact key="react" />],
    ["Next.js", "https://nextjs.org/", <SiNextdotjs key="next" />],
    ["Typescript", "https://www.typescriptlang.org/", <SiTypescript key="ts" />],
    ["HTML5", "https://en.wikipedia.org/wiki/HTML5", <SiHtml5 key="html" />],
    ["CSS3", "https://en.wikipedia.org/wiki/CSS", <SiCss3 key="css" />],
    ["Sass", "https://sass-lang.com/", <SiSass key="sass" />],
  ],
  ADDITIONAL: [
    [
      "Apollo GraphQL",
      "https://www.apollographql.com/",
      <SiApollographql key="apollo" />,
    ],
    // ["Zustand", "https://zustand.docs.pmnd.rs/", <SiZustand key="zustand" />],
    ["Redux", "https://redux.js.org/", <SiRedux key="redux" />],
    ["React Router", "https://reactrouter.com/", <SiReactrouter key="react-router" />],
    ["TailwindCSS", "https://tailwindcss.com/", <SiTailwindcss key="tailwind" />],
    ["MaterialUI", "https://mui.com/", <SiMaterialdesign key="material-ui" />],
    ["Jest", "https://jestjs.io/", <SiJest key="jest" />],
    [
      "React testing library",
      "https://testing-library.com",
      <SiTestinglibrary key="rtl" />,
    ],
  ],
  TOOLS: [
    ["Git", "https://git-scm.com/", <SiGit key="git" />],
    ["Bash", "https://en.wikipedia.org/wiki/Bash_(Unix_shell)", <SiGnubash key="bash" />],
    ["Docker", "https://www.docker.com/", <SiDocker key="docker" />],
    ["Webpack", "https://webpack.js.org/", <SiWebpack key="webpack" />],
    ["Eslint", "https://eslint.org/", <SiEslint key="eslint" />],
    ["NPM", "https://www.npmjs.com/", <SiNpm key="npm" />],
    ["Yarn", "https://yarnpkg.com/", <SiYarn key="yarn" />],
  ],
};

const listItemRenderer = ([text, href, icon]: [string, string, JSX.Element]) => (
  <a href={href} title={text} target="_blank">
    <IconLabel text={text} prefixIcon={icon} inline />
  </a>
);

const SkillsPage = () => {
  return (
    <article>
      <CommentedRows>
        <h2>TECH STACK</h2>
        <p>A showcase of the tools and technologies I use to bring ideas to life.</p>
        <p>Efficiently, creatively, and with a focus on quality.</p>
      </CommentedRows>
      <section>
        <Heading>GENERAL</Heading>
        <List items={STACK.GENERAL} itemRenderer={listItemRenderer} />
      </section>
      <section>
        <Heading>ADDITIONAL</Heading>
        <List items={STACK.ADDITIONAL} itemRenderer={listItemRenderer} />
      </section>
      <section>
        <Heading>TOOLS</Heading>
        <List items={STACK.TOOLS} itemRenderer={listItemRenderer} />
      </section>
    </article>
  );
};

export default SkillsPage;
