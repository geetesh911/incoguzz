import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";

interface IMakeApolloClient {
  token?: string;
}

export function makeApolloClient({
  token,
}: IMakeApolloClient): ApolloClient<NormalizedCacheObject> {
  // create an apollo link instance, a network interface for apollo client
  const link = createHttpLink({
    uri: `http://192.168.1.36:5000/graphql`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache();
  // instantiate apollo client with apollo link instance and cache instance
  return new ApolloClient({
    link,
    cache,
  });
}

export default makeApolloClient;
