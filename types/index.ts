import { ACTION_VARIANT, ROUTE } from "@/constants";

export type WithChildren<T = object> = T & { children?: React.ReactNode };

export type Route = (typeof ROUTE)[keyof typeof ROUTE];

export type ActionVariant = (typeof ACTION_VARIANT)[keyof typeof ACTION_VARIANT];
