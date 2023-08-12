import * as Types from '../../__generated__/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateAnonymousUserMutationVariables = Types.Exact<{
  input: Types.CreateAnonymousUserInput;
}>;


export type CreateAnonymousUserMutation = { __typename?: 'Mutation', createAnonymousUser?: { __typename?: 'CreateAnonymousUserPayload', id: number, uuid: string } | null };


export const CreateAnonymousUserDocument = gql`
    mutation CreateAnonymousUser($input: CreateAnonymousUserInput!) {
  createAnonymousUser(input: $input) {
    id
    uuid
  }
}
    `;
export type CreateAnonymousUserMutationFn = Apollo.MutationFunction<CreateAnonymousUserMutation, CreateAnonymousUserMutationVariables>;

/**
 * __useCreateAnonymousUserMutation__
 *
 * To run a mutation, you first call `useCreateAnonymousUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnonymousUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnonymousUserMutation, { data, loading, error }] = useCreateAnonymousUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAnonymousUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnonymousUserMutation, CreateAnonymousUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnonymousUserMutation, CreateAnonymousUserMutationVariables>(CreateAnonymousUserDocument, options);
      }
export type CreateAnonymousUserMutationHookResult = ReturnType<typeof useCreateAnonymousUserMutation>;
export type CreateAnonymousUserMutationResult = Apollo.MutationResult<CreateAnonymousUserMutation>;
export type CreateAnonymousUserMutationOptions = Apollo.BaseMutationOptions<CreateAnonymousUserMutation, CreateAnonymousUserMutationVariables>;