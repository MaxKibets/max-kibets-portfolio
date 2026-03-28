import TypeWriter from "@/components/TypeWriter";
import { CommentedRows, Heading, List, Paragraph } from "@/components/ui";

const EXP = [
  {
    COMPANY: "PixelTeh",
    YEARS: "2025 – Present",
    POSITION: "Frontend Developer",
    DESCRIPTION: [
      "High-load gambling platform with real-time betting and financial operations",
      "Designed and developed performance-critical React and Next.js interfaces for a platform serving thousands of concurrent users with real-time",
      "Owned the frontend data-fetching and caching architecture using TanStack Query, minimizing API load while keeping betting data consistent",
      "Collaborated with backend, product and QA teams to align frontend architecture with financial and betting workflows",
      "Participated in architectural decisions around frontend scalability, performance and long-term maintainability",
      "Applied AI-assisted workflows to refactor complex modules, debug real-time issues and speed up feature delivery",
      "Mentored junior and middle developers, improving overall code quality and development standards",
    ],
  },
  {
    COMPANY: "Together Networks",
    YEARS: "2020 – 2024",
    POSITION: "Frontend Developer",
    DESCRIPTION: [
      "Large-scale dating platform used by hundreds of thousands of users",
      "Owned and developed a complex React SPA for a high-traffic consumer product with real-time user interactions",
      "Designed and maintained a scalable GraphQL data layer (Apollo) powering messaging, feeds and user profiles",
      "Refactored legacy frontend architecture, improving performance, stability and development speed",
      "Introduced unit and end-to-end testing practices, significantly reducing regressions and production incidents",
      "Used AI tools to analyze and refactor large frontend modules, speeding up modernization of the codebase",
      "Actively participated in code reviews, technical design discussions",
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
      <TypeWriter
        sequence={[
          800,
          "It all started with a fascination for how websites work \n Since then, I've taken on challenges, learned new skills, and built projects that I’m truly proud of \n Here's a glimpse into where my journey has taken me so far",
        ]}
      />
    </CommentedRows>
    {EXP.map((item) => (
      <section key={item.COMPANY}>
        {Object.keys(item).map((value) => {
          const content = item[value as keyof typeof item];

          return (
            <div key={value}>
              {typeof content === "string" ? (
                <>
                  <Heading>{value}</Heading>
                  <Paragraph>{content}</Paragraph>
                </>
              ) : (
                <>
                  <Heading withBracket>{value}</Heading>
                  <List
                    items={content}
                    itemRenderer={(item) => <>&quot;{item}&quot;</>}
                  />
                </>
              )}
            </div>
          );
        })}
      </section>
    ))}
  </article>
);

export default ExperiencePage;
