import { CommentedRows, Heading, List, Paragraph } from "@/components/ui";
import { HEADING_PREFIX, HEADING_SUFFIX } from "@/constants";

const EXP = [
  {
    COMPANY: "Together Networks",
    YEARS: "2020 - 2024",
    POSITION: "Frontend Developer",
    DESCRIPTION: [
      "React/Apollo SPA development",
      "Developed scalable high-load solutions for a dating sphere",
      "Developed unit and e2e tests to keep code fully test-covered",
      "Worked cooperatively with business analytics, design and QA team using Scrum methodology",
      "Took part in a mentorship program and helped mentees improve their technical skills level",
    ],
  },
  {
    COMPANY: "TrafficDNA",
    YEARS: "2017 - 2019",
    POSITION: "HTML Coder",
    DESCRIPTION: [
      "Creating new and rewriting existing markup of web applications",
      "Create an animations using JavaScript and CSS3",
      "Worked cooperatively with the design team",
      "Adhered to application development policies and quality standards",
    ],
  },
  {
    COMPANY: "OWOX",
    YEARS: "2016 - 2017",
    POSITION: "HTML Coder",
    DESCRIPTION: [
      "Creating new and rewriting existing markup of web applications",
      "Create an animations using CSS3",
      "Worked cooperatively with the design team",
      "Adhered to application development policies and quality standards",
    ],
  },
];

const ExperiencePage = () => (
  <article>
    <CommentedRows>
      <h2>MY EXPERIENCE</h2>
      <p>
        It all started with a fascination for how websites work. Since then, I’ve taken on
        challenges, learned new skills, and built projects that I’m truly proud of.
        Here&apos;s a glimpse into where my journey has taken me so far
      </p>
    </CommentedRows>
    {EXP.map((item) => (
      <section key={item.COMPANY}>
        {"{"}
        {Object.keys(item).map((key) => {
          const content = item[key as keyof typeof item];

          return (
            <div key={key}>
              <Heading prefix={HEADING_PREFIX.NONE} suffix={HEADING_SUFFIX.COLON}>
                {key}
              </Heading>
              {typeof content === "string" ? (
                <Paragraph>{content}</Paragraph>
              ) : (
                <List items={content} />
              )}
            </div>
          );
        })}
        {"}"}
      </section>
    ))}
  </article>
);

export default ExperiencePage;
