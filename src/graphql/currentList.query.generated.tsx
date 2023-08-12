import * as Types from '../app/__generated__/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentListQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentListQueryQuery = { __typename?: 'Query', currentList?: { __typename?: 'List', uuid: string, published: boolean, items: Array<{ __typename?: 'Item', number: number, name: string, doneAt?: any | null }> } | null };


export const CurrentListQueryDocument = gql`
    query CurrentListQuery {
  currentList {
    uuid
    published
    items {
      number
      name
      doneAt
    }
  }
}
    `;

/**
 * __useCurrentListQueryQuery__
 *
 * To run a query within a React component, call `useCurrentListQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentListQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentListQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentListQueryQuery(baseOptions?: Apollo.QueryHookOptions<CurrentListQueryQuery, CurrentListQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentListQueryQuery, CurrentListQueryQueryVariables>(CurrentListQueryDocument, options);
      }
export function useCurrentListQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentListQueryQuery, CurrentListQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentListQueryQuery, CurrentListQueryQueryVariables>(CurrentListQueryDocument, options);
        }
export type CurrentListQueryQueryHookResult = ReturnType<typeof useCurrentListQueryQuery>;
export type CurrentListQueryLazyQueryHookResult = ReturnType<typeof useCurrentListQueryLazyQuery>;
export type CurrentListQueryQueryResult = Apollo.QueryResult<CurrentListQueryQuery, CurrentListQueryQueryVariables>;