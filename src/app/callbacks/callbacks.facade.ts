import { useCallback, useMemo } from "react";
import { useCreateListMutation } from "./graphql/createList.mutation.generated";

export const useCallbackFacade = () => {
  const [createListMutation] = useCreateListMutation({});

  const handleCreateList = useCallback(
    async (items: string[]) => {
      const response = await createListMutation({
        variables: {
          input: {
            items: items,
          },
        },
      });
      if (response.data) {
        const list = response?.data.createList;
        console.log(list);
      }
    },
    [createListMutation]
  );

  return {
    handleCreateList,
  } as const;
};
