import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import {
  GetExplorePostsQuery,
  GetExplorePostsQueryVariables,
  GetExplorePostsDocument,
  PostOutput,
} from "@incoguzz/graphql";
import { ExploreHeader } from "../ExploreHeader";
import { RouteNames } from "../../../Navigation/constants";
import ExploreSearch from "../ExploreSearch";
import { PostsMasonryList } from "../../shared/List/PostsMasonryList";

export const Feed: FC = () => {
  const query = useQuery<GetExplorePostsQuery, GetExplorePostsQueryVariables>(
    GetExplorePostsDocument,
    {
      variables: { paginationInput: { take: 15, firstQueryResult: true } },
      notifyOnNetworkStatusChange: true,
    },
  );
  const { data } = query;

  const posts = (data?.getExplorePosts?.data as PostOutput[]) || [];

  return (
    <PostsMasonryList
      feedCardProps={{
        postSection: "Explore",
        navigateTo: RouteNames.ExplorePost,
      }}
      posts={posts}
      query={query}
      ListHeaderComponent={<ExploreHeader />}
      StickyComponent={<ExploreSearch />}
      stickyHeaderIndices={[1]}
    />
  );
};
