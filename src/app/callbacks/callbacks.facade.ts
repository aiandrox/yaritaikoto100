import { useCallback } from "react";
import { useCreateListMutation } from "./graphql/createList.mutation.generated";

export const useCallbackFacade = () => {
  const [createListMutation] = useCreateListMutation({});

  const handleCreateList = useCallback(async () => {
    const response = await createListMutation({
      variables: {
        input: {},
      },
    });
    if (response.data) {
      const list = response?.data.createList;
      console.log(list);
    }
  }, [createListMutation]);

  return {
    handleCreateList,
  } as const;
};
