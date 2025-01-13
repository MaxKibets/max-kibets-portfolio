import { toast, Variant } from "react-tiny-toast";
import { VscPass, VscError } from "react-icons/vsc";

import { IconLabel } from "@/components/ui";
import { NOTIF_TYPE } from "@/constants";

export const showNotification = (message: string, type: Variant = NOTIF_TYPE.DANGER) => {
  toast.show(
    <IconLabel
      prefixIcon={type === NOTIF_TYPE.SUCCESS ? <VscPass /> : <VscError />}
      text={message}
    />,
    {
      variant: type,
      timeout: 30000000,
      position: "top-center",
    },
  );
};
