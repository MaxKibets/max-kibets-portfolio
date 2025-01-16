import { startTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import { PROGRESS_STATE } from "@/components/ProgressBar/constants";
import { useProgressBarContext } from "@/components/ProgressBar/hooks";
import { Href } from "@/types";

export const usePageTransition = () => {
  const pathname = usePathname();
  const router = useRouter();
  const setProgressState = useProgressBarContext();

  return (href: Href) => {
    if (href === pathname) {
      return;
    }

    setProgressState(PROGRESS_STATE.IN_PROGRESS);

    startTransition(() => {
      router.push(href);

      setProgressState(PROGRESS_STATE.COMPLETE);
    });
  };
};
