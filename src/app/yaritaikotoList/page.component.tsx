"use client";

import { useCurrentListFacade } from "./currentList.facade";
import ListComponent from "./list.component";
import { Item, List } from "./models";

export const PageComponent = () => {
  const { currentList } = useCurrentListFacade();
  const list: List = currentList
    ? {
        uuid: currentList.uuid,
        title: currentList.title,
        published: currentList.published,
      }
    : {
        uuid: "uuid",
        title: "やりたいことリスト",
        published: false,
      };

  const items: Item[] = Array.from({ length: 100 }, (_, i) => {
    const item = currentList?.items.find((item) => item.number === i + 1);
    return item || { number: i + 1, name: "", doneAt: null };
  });

  return <ListComponent list={list} items={items} />;
};
