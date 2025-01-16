import { ReactNode } from "react";

export type ListProps<T> = {
  items: T[];
  itemRenderer: (item: T) => ReactNode;
};
