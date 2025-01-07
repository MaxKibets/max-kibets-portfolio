import { CommentedRows, Heading, Paragraph } from "@/components/ui";
import { HEADING_PREFIX, HEADING_SUFFIX } from "@/constants/shared";

const EXP = [
  {
    COMPANY: "Together Networks",
    YEARS: "2020 - 2024",
    POSITION: "Frontend Developer",
    DESCRIPTION: "----",
  },
  {
    COMPANY: "TrafficDNA",
    YEARS: "2017 - 2019",
    POSITION: "HTML Coder",
    DESCRIPTION:
      "Creating new and rewriting existing markup of web applications. Create an animations using JavaScript and CSS3. Worked well with the design team. Adhered to application development policies and quality standards",
  },
  {
    COMPANY: "OWOX",
    YEARS: "2016 - 2017",
    POSITION: "HTML Coder",
    DESCRIPTION:
      "Creating new and rewriting existing markup of web applications. Create an animations using CSS3. Worked well with the design team. Adhered to application development policies and quality standards",
  },
];

const ExperiencePage = () => {
  return (
    <article>
      <CommentedRows>
        <h2>MY EXPERIENCE</h2>
        <p>
          It all started with a fascination for how websites work. Since then, I’ve taken
          on challenges, learned new skills, and built projects that I’m truly proud of.
          Here's a glimpse into where my journey has taken me so far
        </p>
      </CommentedRows>
      {EXP.map((item) => (
        <section key={item.COMPANY}>
          {Object.keys(item).map((key) => (
            <div key={key}>
              <Heading prefix={HEADING_PREFIX.NONE} suffix={HEADING_SUFFIX.COLON}>
                {key}
              </Heading>
              <Paragraph>{item[key as keyof typeof item]}</Paragraph>
            </div>
          ))}
        </section>
      ))}
    </article>
  );
};

export default ExperiencePage;
