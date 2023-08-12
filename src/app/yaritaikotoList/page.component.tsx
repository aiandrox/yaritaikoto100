"use client";

import { useYaritaikotoListFacade } from "./yaritaikotoList.facade";
import { Item } from "./models";
import ListComponent from "./list.component";
import LocalStorageListComponent from "./localStorageList.component";
import useLocalStorage from "@/utils/localStorage";

export const PageComponent = () => {
  const { currentList } = useYaritaikotoListFacade();
  const { value: localStorageItemsValue, setValueAndStorage: setLocalStorageItems } =
    useLocalStorage("items");

  if (currentList) {
    const items: Item[] = Array.from({ length: 100 }, (_, i) => {
      const item = currentList?.items.find((item) => item.number === i + 1);
      return item || { number: i + 1, name: "", doneAt: null };
    });

    return <ListComponent list={currentList} items={items} />;
  } else {
    const localStorageItems = localStorageItemsValue ? JSON.parse(localStorageItemsValue) : [];

    const items: Item[] = Array.from({ length: 100 }, (_, i) => {
      const item = localStorageItems ? localStorageItems[i] : "";
      return { number: i + 1, name: item, doneAt: null };
    });

    const onChangeItemName = (e: any, number: number) => {
      items[number - 1].name = e.target.value;
      setLocalStorageItems(
        JSON.stringify(
          items.map((item) => item.name),
          undefined,
          1
        )
      );
    };

    return <LocalStorageListComponent items={items} onChangeItemName={onChangeItemName} />;
  }
};
