"use client";

import { redirect } from "next/navigation";
import { useCallbackFacade } from "./callbacks.facade";
import useLocalStorage from "@/utils/localStorage";

export default function Callbacks() {
  const { value: localStorageItemsValue } = useLocalStorage("items");
  console.log(localStorageItemsValue);
  const localStorageItems = localStorageItemsValue ? JSON.parse(localStorageItemsValue) : [];
  const items = Array.from({ length: 100 }, (_, i) => {
    return localStorageItems ? (localStorageItems[i] as string) : "";
  });

  const { handleCreateList } = useCallbackFacade();

  handleCreateList(items);

  redirect("/");
}
