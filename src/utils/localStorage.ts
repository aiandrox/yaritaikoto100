import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    const res = localStorage.getItem(key);
    if (res) {
      setValue(res);
    }
  }, []);

  const setValueAndStorage = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  return { value, setValueAndStorage };
}
