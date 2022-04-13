import React, { FC, useRef } from "react";
import { useQuery } from "@apollo/client";
import {
  PostOutput,
  GetUserPostsDocument,
  GetUserPostsQuery,
  GetUserPostsQueryVariables,
} from "@incoguzz/graphql";
import { PageHeader } from "../../shared";
import { RouteNames } from "../../../Navigation/constants";
import { IRenderItemType } from "../Bookmarks/BookmarksBody";
import { FeedCard } from "../../explore";
import LocalMasonryList from "../../shared/List/MasonryList";
import Animated from "react-native-reanimated";
import { FeedContentLoader } from "../../explore/Feed/FeedContentLoader";
import { masonaryListStyles } from "../../shared/List/styled";
import { useRefetch } from "../../../hooks";

export const UserPostsTimeline: FC = () => {
  const { data, loading, refetch, networkStatus } = useQuery<
    GetUserPostsQuery,
    GetUserPostsQueryVariables
  >(GetUserPostsDocument, {
    variables: { paginationInput: { take: 5, firstQueryResult: true } },
    notifyOnNetworkStatusChange: true,
  });
  const { refetchQuery, isRefecting } = useRefetch({ refetch, networkStatus });

  const pageHeader = "User Posts";
  const scrollHandler = useRef<Animated.ScrollView | null>(null);
  const posts = (data?.getUserPosts?.data as PostOutput[]) || [];

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
