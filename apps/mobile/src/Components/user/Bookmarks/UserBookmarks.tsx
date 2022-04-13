import React, { FC, useMemo, useRef } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import {
  GetBookmarkedPostsDocument,
  GetBookmarkedPostsQuery,
  GetBookmarkedPostsQueryVariables,
  PostOutput,
} from "@incoguzz/graphql";
import LocalMasonryList from "../../shared/List/MasonryList";
import { FeedContentLoader } from "../../explore/Feed/FeedContentLoader";
import { PageHeader } from "../../shared";
import Animated from "react-native-reanimated";
import { FeedCard } from "../../explore";
import { RouteNames } from "../../../Navigation/constants";
import { IRenderItemType } from "./BookmarksBody";
import { masonaryListStyles } from "../../shared/List/styled";
import { useRefetch } from "../../../hooks";

export const UserBookmarks: FC = () => {
  const { data, loading, refetch, networkStatus } = useQuery<
    GetBookmarkedPostsQuery,
    GetBookmarkedPostsQueryVariables
  >(GetBookmarkedPostsDocument, {
    variables: { paginationInput: { take: 5, firstQueryResult: true } },
    notifyOnNetworkStatusChange: true,
  });
  const { refetchQuery, isRefecting } = useRefetch({ refetch, networkStatus });

  const pageHeader = "Bookmarks";
  const scrollHandler = useRef<Animated.ScrollView | null>(null);

  const posts =
    useMemo(
      () =>
        data?.getBookmarkedPosts?.data.map(
          bookmarkPost => bookmarkPost?.post,
        ) as PostOutput[],
      [data],
    ) || [];

  const renderItem = ({ item: post, i }: IRenderItemType) => {
    return (
      <FeedCard
        innerRef={scrollHandler}
        key={post.id}
        post={post}
        postSection={pageHeader}
        posts={posts}
        initialIndex={i}
        navigateTo={RouteNames.BookmarksPost}
      />
    );
  };

  return (
    <LocalMasonryList
      innerRef={scrollHandler}
      StickyComponent={<PageHeader text={pageHeader} />}
      stickyHeaderIndices={[1]}
      contentContainerStyle={masonaryListStyles.masonryList}
      numColumns={2}
      data={isRefecting ? [] : posts}
      loading={loading}
      renderItem={renderItem}
      onRefresh={() => refetchQuery()}
      refreshing={isRefecting}
      onEndReached={() => null}
      onEndReachedThreshold={0.2}
      showsVerticalScrollIndicator={false}
      LoadingView={<FeedContentLoader />}
    />
  );
};
