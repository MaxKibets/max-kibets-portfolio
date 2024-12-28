import { ROUTES } from "@/constants/routes";

export type WithChildren<T = object> = T & { children?: React.ReactNode };

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
