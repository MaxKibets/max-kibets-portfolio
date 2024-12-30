import { startTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import { PROGRESS_STATE } from "@/components/ProgressBar/constants";
import { useProgressBarContext } from "@/components/ProgressBar/hooks";
import { Route } from "@/types/shared";

export const usePageTransition = () => {
  const pathname = usePathname();
  const router = useRouter();
  const setProgressState = useProgressBarContext();

  return (href: Route) => {
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
