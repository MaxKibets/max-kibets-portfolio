import { JSX } from "react";

import { ACTION_VARIANT, HREF, ROUTE } from "@/constants";

export type WithChildren<T = object> = T & { children?: React.ReactNode };

export type Route = (typeof ROUTE)[keyof typeof ROUTE];

export type Href = (typeof HREF)[keyof typeof HREF];

export type ActionVariant = (typeof ACTION_VARIANT)[keyof typeof ACTION_VARIANT];

export type ListItem = [string, string, JSX.Element];
