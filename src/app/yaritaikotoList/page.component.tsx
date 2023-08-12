"use client";

import { useCurrentListFacade } from "./currentList.facade";
import List from "./list.component";

export const Page = () => {
  const { currentList } = useCurrentListFacade();

  return currentList && <List currentList={currentList} />;
};
