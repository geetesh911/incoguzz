import React from "react";
import { ApolloQueryResult, NetworkStatus } from "@apollo/client";

type OperationVariables = Record<string, any>;

type IUseFetchParams<TData, TVariables = OperationVariables> = {
  refetch: (
    variables?: Partial<TVariables>,
  ) => Promise<ApolloQueryResult<TData>>;
  networkStatus: NetworkStatus;
};

export function usePagination<TData, TVariables>({
  refetch,
  networkStatus,
}: IUseFetchParams<TData, TVariables>) {
  const isRefecting = networkStatus === NetworkStatus.refetch;

  return { isRefecting, refetchQuery: refetch };
}
