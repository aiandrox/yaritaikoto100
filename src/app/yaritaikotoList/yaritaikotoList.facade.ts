import { useMemo } from "react";
import { useCurrentListQueryQuery } from "./graphql/currentList.query.generated";

export const useYaritaikotoListFacade = () => {
  const { data: currentListData } = useCurrentListQueryQuery({
    variables: {},
  });
  const currentList = useMemo(() => currentListData?.currentList, [currentListData]);

  return {
    currentList: currentList,
  } as const;
};
