import { Variant } from "react-tiny-toast";

export const ROUTE = {
  MAIN: "/",
  SKILLS: "/skills",
  EXPERIENCE: "/experience",
  CONTACT: "/contact",
} as const;

export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

// TODO move to a separate file because this is text content.
export const PAGE_TITLE = {
  MAIN: "main",
  SKILLS: "skills",
  EXPERIENCE: "experience",
  CONTACT: "contact",
  // Last part of the title for each page
  SUFFIX: ".js",
} as const;

export const HEADING_LEVEL = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
} as const;

export const HEADING_PREFIX = {
  CONST: "prefixConst",
  NONE: "",
} as const;

export const HEADING_SUFFIX = {
  EQUAL: "suffixEqual",
  COLON: "suffixColon",
} as const;

export const NOTIF_TYPE = {
  SUCCESS: "success" as Variant,
  DANGER: "danger" as Variant,
} as const;

export const ACTION_VARIANT = {
  SHADED: "shaded",
  OUTLINED: "outlined",
  UNDERLINED: "underlined",
  DEFAULT: "default",
} as const;
