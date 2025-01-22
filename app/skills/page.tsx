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
import { RiBearSmileFill } from "react-icons/ri";

import { CommentedRows, Heading, IconLabel, List } from "@/components/ui";
import { ListItem } from "@/types";
import SkillsContainer from "@/components/SkillsContainer";
import TypeWriter from "@/components/TypeWriter";

const STACK = {
  GENERAL: [
    ["Javascript", "https://en.wikipedia.org/wiki/JavaScript", <SiJavascript key="js" />],
    ["React", "https://react.dev/", <SiReact key="react" />],
    ["Next.js", "https://nextjs.org/", <SiNextdotjs key="next" />],
    ["Typescript", "https://www.typescriptlang.org/", <SiTypescript key="ts" />],
    ["HTML5", "https://en.wikipedia.org/wiki/HTML5", <SiHtml5 key="html" />],
    ["CSS3", "https://en.wikipedia.org/wiki/CSS", <SiCss3 key="css" />],
    ["Sass", "https://sass-lang.com/", <SiSass key="sass" />],
  ] as ListItem[],
  ADDITIONAL: [
    [
      "Apollo GraphQL",
      "https://www.apollographql.com/",
      <SiApollographql key="apollo" />,
    ],
    ["Redux", "https://redux.js.org/", <SiRedux key="redux" />],
    ["Zustand", "https://zustand.docs.pmnd.rs/", <RiBearSmileFill key="zustand" />], // react-icond doesn't have an icon for Zustand
    ["React Router", "https://reactrouter.com/", <SiReactrouter key="react-router" />],
    ["TailwindCSS", "https://tailwindcss.com/", <SiTailwindcss key="tailwind" />],
    ["MaterialUI", "https://mui.com/", <SiMaterialdesign key="material-ui" />],
    ["Jest", "https://jestjs.io/", <SiJest key="jest" />],
    [
      "React testing library",
      "https://testing-library.com",
      <SiTestinglibrary key="rtl" />,
    ],
  ] as ListItem[],
  TOOLS: [
    ["Git", "https://git-scm.com/", <SiGit key="git" />],
    ["Bash", "https://en.wikipedia.org/wiki/Bash_(Unix_shell)", <SiGnubash key="bash" />],
    ["Docker", "https://www.docker.com/", <SiDocker key="docker" />],
    ["Webpack", "https://webpack.js.org/", <SiWebpack key="webpack" />],
    ["Eslint", "https://eslint.org/", <SiEslint key="eslint" />],
    ["NPM", "https://www.npmjs.com/", <SiNpm key="npm" />],
    ["Yarn", "https://yarnpkg.com/", <SiYarn key="yarn" />],
  ] as ListItem[],
};

const listItemRenderer = ([text, href, icon]: ListItem) => (
  <a href={href} title={text} target="_blank">
    <IconLabel text={text} prefixIcon={icon} inline />
  </a>
);

const SkillsPage = () => {
  return (
    <SkillsContainer>
      <CommentedRows>
        <h2>TECH STACK</h2>
        <TypeWriter
          sequence={[
            800,
            "A showcase of the tools and technologies I use to bring ideas to life efficiently",
            1500,
            "A showcase of the tools and technologies I use to bring ideas to life creatively",
            1500,
            "A showcase of the tools and technologies I use to bring ideas to life with a focus on quality",
            1000,
          ]}
          repeat={Infinity}
        />
      </CommentedRows>
      <section>
        <Heading withBracket>GENERAL</Heading>
        <List items={STACK.GENERAL} itemRenderer={listItemRenderer} />
      </section>
      <section>
        <Heading withBracket>ADDITIONAL</Heading>
        <List items={STACK.ADDITIONAL} itemRenderer={listItemRenderer} />
      </section>
      <section>
        <Heading withBracket>TOOLS</Heading>
        <List items={STACK.TOOLS} itemRenderer={listItemRenderer} />
      </section>
    </SkillsContainer>
  );
};

export default SkillsPage;
