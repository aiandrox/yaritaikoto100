import { useMemo } from "react";
import { useCurrentListQuery } from "./graphql/currentList.query.generated";
import { useCurrentUserQuery } from "./graphql/currentUser.query.generated";

export const useYaritaikotoListFacade = () => {
  const { data: currentUserData } = useCurrentUserQuery({
    variables: {},
  });
  const currentUser = useMemo(() => currentUserData?.currentUser, [currentUserData]);

  const { data: currentListData } = useCurrentListQuery({
    variables: {},
  });
  const currentList = useMemo(() => currentListData?.currentList, [currentListData]);

  return {
    currentUser,
    currentList,
  } as const;
};
