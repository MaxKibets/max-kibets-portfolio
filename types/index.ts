import { ACTION_VARIANT, ROUTE, SIZE } from "@/constants";

export type WithChildren<T = object> = T & { children?: React.ReactNode };

export type Route = (typeof ROUTE)[keyof typeof ROUTE];

export type Size = (typeof SIZE)[keyof typeof SIZE];

export type ActionVariant = (typeof ACTION_VARIANT)[keyof typeof ACTION_VARIANT];
