import { useMemo } from "react";
import { useCurrentListQueryQuery } from "../../graphql/currentList.query.generated";

export const useCurrentListFacade = () => {
  const {
    data: currentListData,
    loading,
    error,
  } = useCurrentListQueryQuery({
    variables: {},
  });
  const currentList = useMemo(() => currentListData?.currentList, [currentListData]);

  return {
    currentList: currentList,
  } as const;
};
