import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import {
  PostOutput,
  GetUserPostsDocument,
  GetUserPostsQuery,
  GetUserPostsQueryVariables,
} from "@incoguzz/graphql";
import { PostsMasonryList } from "../../shared/List/PostsMasonryList";
import { RouteNames } from "../../../Navigation/constants";

export const UserPosts: FC = () => {
  const query = useQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(
    GetUserPostsDocument,
    {
      variables: { paginationInput: { take: 5, firstQueryResult: true } },
      notifyOnNetworkStatusChange: true,
    },
  );
  const { data } = query;
  const pageHeader = "User Posts";

  const posts = (data?.getUserPosts?.data as PostOutput[]) || [];

  return (
    <PostsMasonryList
      feedCardProps={{
        postSection: pageHeader,
        navigateTo: RouteNames.UserPost,
      }}
      pageHeader={pageHeader}
      posts={posts}
      query={query}
    />
  );
};
