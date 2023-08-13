import * as Types from '../../__generated__/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentListQuery = { __typename?: 'Query', currentList: { __typename?: 'List', uuid: string, title: string, published: boolean, items: Array<{ __typename?: 'Item', number: number, name: string, doneAt?: string | null }> } };


export const CurrentListDocument = gql`
    query CurrentList {
  currentList {
    uuid
    title
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
 * __useCurrentListQuery__
 *
 * To run a query within a React component, call `useCurrentListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentListQuery(baseOptions?: Apollo.QueryHookOptions<CurrentListQuery, CurrentListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentListQuery, CurrentListQueryVariables>(CurrentListDocument, options);
      }
export function useCurrentListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentListQuery, CurrentListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentListQuery, CurrentListQueryVariables>(CurrentListDocument, options);
        }
export type CurrentListQueryHookResult = ReturnType<typeof useCurrentListQuery>;
export type CurrentListLazyQueryHookResult = ReturnType<typeof useCurrentListLazyQuery>;
export type CurrentListQueryResult = Apollo.QueryResult<CurrentListQuery, CurrentListQueryVariables>;