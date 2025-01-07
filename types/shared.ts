import { ROUTE, SIZE } from "@/constants/shared";

export type WithChildren<T = object> = T & { children?: React.ReactNode };

export type Route = (typeof ROUTE)[keyof typeof ROUTE];

export type Size = (typeof SIZE)[keyof typeof SIZE];
