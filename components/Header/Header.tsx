import { VscCode } from "react-icons/vsc";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui";
import css from "./header.module.css";

const Header = () => {
  // const router = useRouter();

  return (
    <header className={css.header}>
      <VscCode className={css.logo} />
      {/* <Button title="Go Back" onClick={() => router.back()}>
        <VscArrowLeft />
      </Button>
      <Button title="Go Forward" onClick={() => router.forward()}>
        <VscArrowRight />
      </Button> */}
      <h1 className={css.heading}>Max Kibets portfolio</h1>
    </header>
  );
};

export default Header;
