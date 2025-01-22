"use client";

import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

import { TypeWriterProps } from "./types";

const TypeWriter: FC<TypeWriterProps> = (props) => (
  <TypeAnimation speed={75} style={{ whiteSpace: "pre-line" }} {...props} />
);

export default TypeWriter;
