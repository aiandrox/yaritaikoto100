import { useRouter } from "next/router";
import { useCallbackFacade } from "./callbacks.facade";
import { useMemo } from "react";
import useLocalStorage from "@/utils/localStorage";

export default function Callbacks() {
  const { value: localStorageItemsValue } = useLocalStorage("items");
  const localStorageItems = useMemo(
    () => (localStorageItemsValue ? JSON.parse(localStorageItemsValue) : []),
    [localStorageItemsValue]
  );

  const { handleCreateList } = useCallbackFacade();

  handleCreateList(localStorageItems);

  const router = useRouter();
  router.push("/");
}
