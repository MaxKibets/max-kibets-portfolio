"use client";

import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

import { TypeWriterProps } from "./types";

const TypeWriter: FC<TypeWriterProps> = ({ sequence, preRenderFirstString, repeat }) => (
  <TypeAnimation
    preRenderFirstString={preRenderFirstString}
    sequence={sequence}
    speed={75}
    repeat={repeat}
    style={{ whiteSpace: "pre-line" }}
  />
);

export default TypeWriter;
