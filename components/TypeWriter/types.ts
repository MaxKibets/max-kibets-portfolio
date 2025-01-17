export type Sequence = Array<
  string | number | ((element: HTMLElement | null) => void | Promise<void>)
>;

export type TypeWriterProps = {
  sequence: Sequence;
  repeat?: number;
};
