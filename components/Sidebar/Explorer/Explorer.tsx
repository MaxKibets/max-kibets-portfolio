import ExplorerLayout from "./ExplorerLayout";
import { useToggle } from "@/hooks/useToggle";

const Explorer = () => {
  const [expanded, toggleExpanded] = useToggle(true);

  return <ExplorerLayout expanded={expanded} onClick={toggleExpanded} />;
};

export default Explorer;
