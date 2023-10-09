import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  },
  query: {
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  },
  mutate: {
    fetchPolicy: "no-cache",
  },
};

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "X-Requested-With": "XMLHttpRequest",
    },
  };
});

const httpLink = createHttpLink({
  uri: "https://localhost:3000/graphql/enterprise",
  fetch: (input: RequestInfo | URL, init?: RequestInit) => {
    const body: { operationName?: string } =
      typeof init?.body === "string" ? JSON.parse(init.body) : {};
    return body.operationName
      ? fetch(`${input}?opname=${body.operationName}`, init)
      : fetch(input, init);
  },
  credentials: "include",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions,
  link: ApolloLink.from([authLink, httpLink]),
});
