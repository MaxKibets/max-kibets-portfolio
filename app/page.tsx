import { CommentedRows } from "@/components/ui";

const description =
  "Software engineer with a passion for building web applications. Specialized in front-end development and have experience with React, TypeScript, Next.js, and more.";
export default function Home() {
  return (
    <>
      <CommentedRows>
        <h2>Max Kibets – Frontend Developer</h2>
        <p>
          Building scalable,
          <br /> efficient,
          <br /> and modern web applications
        </p>
      </CommentedRows>
      <p>
        "I craft user interfaces that blend functionality with aesthetics, delivering
        seamless digital experiences."
      </p>
    </>
  );
}
