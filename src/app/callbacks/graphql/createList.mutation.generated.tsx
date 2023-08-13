import * as Types from '../../__generated__/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateListMutationVariables = Types.Exact<{
  input: Types.CreateListInput;
}>;


export type CreateListMutation = { __typename?: 'Mutation', createList?: { __typename?: 'CreateListPayload', list: { __typename?: 'List', uuid: string } } | null };


export const CreateListDocument = gql`
    mutation CreateList($input: CreateListInput!) {
  createList(input: $input) {
    list {
      uuid
    }
  }
}
    `;
export type CreateListMutationFn = Apollo.MutationFunction<CreateListMutation, CreateListMutationVariables>;

/**
 * __useCreateListMutation__
 *
 * To run a mutation, you first call `useCreateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListMutation, { data, loading, error }] = useCreateListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateListMutation(baseOptions?: Apollo.MutationHookOptions<CreateListMutation, CreateListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateListMutation, CreateListMutationVariables>(CreateListDocument, options);
      }
export type CreateListMutationHookResult = ReturnType<typeof useCreateListMutation>;
export type CreateListMutationResult = Apollo.MutationResult<CreateListMutation>;
export type CreateListMutationOptions = Apollo.BaseMutationOptions<CreateListMutation, CreateListMutationVariables>;