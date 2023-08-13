import * as Types from '../../__generated__/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentUserQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentUserQueryQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', id: number, name: string } | null };


export const CurrentUserQueryDocument = gql`
    query CurrentUserQuery {
  currentUser {
    id
    name
  }
}
    `;

/**
 * __useCurrentUserQueryQuery__
 *
 * To run a query within a React component, call `useCurrentUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQueryQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>(CurrentUserQueryDocument, options);
      }
export function useCurrentUserQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>(CurrentUserQueryDocument, options);
        }
export type CurrentUserQueryQueryHookResult = ReturnType<typeof useCurrentUserQueryQuery>;
export type CurrentUserQueryLazyQueryHookResult = ReturnType<typeof useCurrentUserQueryLazyQuery>;
export type CurrentUserQueryQueryResult = Apollo.QueryResult<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>;