import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
interface IMakeApolloClient {
  token?: string;
}

export function makeApolloClient({
  token,
}: IMakeApolloClient): ApolloClient<NormalizedCacheObject> {
  // create an apollo link instance, a network interface for apollo client
  const link = createUploadLink({
    uri: `http://localhost:5000/graphql`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache();
  // instantiate apollo client with apollo link instance and cache instance
  return new ApolloClient({
    //@ts-ignore
    link,
    cache,
  });
}

export default makeApolloClient;
