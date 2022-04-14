import React, { FC, useMemo } from "react";
import { useQuery } from "@apollo/client";
import {
  GetBookmarkedPostsDocument,
  GetBookmarkedPostsQuery,
  GetBookmarkedPostsQueryVariables,
  PostOutput,
} from "@incoguzz/graphql";
import { RouteNames } from "../../../Navigation/constants";
import { PostsMasonryList } from "../../shared/List/PostsMasonryList";

export const UserBookmarks: FC = () => {
  const query = useQuery<
    GetBookmarkedPostsQuery,
    GetBookmarkedPostsQueryVariables
  >(GetBookmarkedPostsDocument, {
    variables: { paginationInput: { take: 5, firstQueryResult: true } },
    notifyOnNetworkStatusChange: true,
  });

  const { data } = query;
  const pageHeader = "Bookmarks";

  const posts =
    useMemo(
      () =>
        data?.getBookmarkedPosts?.data.map(
          bookmarkPost => bookmarkPost?.post,
        ) as PostOutput[],
      [data],
    ) || [];

  return (
    <PostsMasonryList
      feedCardProps={{
        postSection: pageHeader,
        navigateTo: RouteNames.BookmarksPost,
      }}
      pageHeader={pageHeader}
      posts={posts}
      query={query}
    />
  );
};
