import { cookies } from "next/headers";
import { useCallback, useMemo } from "react";
import { useCurrentListQueryQuery } from "./graphql/currentList.query.generated";
import { useCreateAnonymousUserMutation } from "./graphql/createAnonymousUser.mutation.generated";

export const useYaritaikotoListFacade = () => {
  // const [createAnonymousUserMutation] = useCreateAnonymousUserMutation({});

  // const handleCreateAnonymousUser = useCallback(async () => {
  //   const response = await createAnonymousUserMutation({
  //     variables: {
  //       input: {},
  //     },
  //   });
  //   if (response.data) {
  //     const user = response?.data.createAnonymousUser;
  //     if (user) {
  //       cookies().set("id", String(user.id));
  //       cookies().set("uuid", user.uuid);
  //     }
  //   }
  // }, [createAnonymousUserMutation]);

  const { data: currentListData } = useCurrentListQueryQuery({
    variables: {},
  });
  const currentList = useMemo(() => currentListData?.currentList, [currentListData]);

  return {
    // handleCreateAnonymousUser,
    currentList: currentList,
  } as const;
};
