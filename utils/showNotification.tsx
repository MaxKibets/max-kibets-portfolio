import { toast, Variant } from "react-tiny-toast";
import { VscError } from "react-icons/vsc";

import { IconLabel } from "@/components/ui";
import { NOTIF_TYPE } from "@/constants";
import { ReactNode } from "react";

export const showNotification = ({
  message,
  type = NOTIF_TYPE.DANGER,
  icon = <VscError />,
}: {
  message: string;
  type?: Variant;
  icon?: ReactNode;
}) => {
  toast.show(<IconLabel prefixIcon={icon} text={message} />, {
    variant: type,
    timeout: 2000,
    position: "top-center",
  });
};
