import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://localhost:3000/graphql/enterprise",
  cache: new InMemoryCache(),
});
