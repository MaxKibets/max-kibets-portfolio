import { ACTION_VARIANT, HREF } from "@/constants";

export type WithChildren<T = object> = T & { children?: React.ReactNode };

export type Href = (typeof HREF)[keyof typeof HREF];

export type ActionVariant = (typeof ACTION_VARIANT)[keyof typeof ACTION_VARIANT];
