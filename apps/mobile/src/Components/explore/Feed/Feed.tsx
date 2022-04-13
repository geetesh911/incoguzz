import React, { FC, useRef } from "react";
import { useQuery } from "@apollo/client";
import {
  GetExplorePostsQuery,
  GetExplorePostsQueryVariables,
  GetExplorePostsDocument,
  PostOutput,
} from "@incoguzz/graphql";
import LocalMasonryList from "../../shared/List/MasonryList";
import { FeedCard } from "./FeedCard";
import { ExploreHeader } from "../ExploreHeader";
import { FeedContentLoader } from "./FeedContentLoader";
import { RouteNames } from "../../../Navigation/constants";
import Animated from "react-native-reanimated";
import ExploreSearch from "../ExploreSearch";
import { IRenderItemType } from "../../user/Bookmarks/BookmarksBody";
import { masonaryListStyles } from "../../shared/List/styled";
import { useRefetch } from "../../../hooks";

export const Feed: FC = () => {
  const { data, loading, refetch, networkStatus } = useQuery<
    GetExplorePostsQuery,
    GetExplorePostsQueryVariables
  >(GetExplorePostsDocument, {
    variables: { paginationInput: { take: 5, firstQueryResult: true } },
    notifyOnNetworkStatusChange: true,
  });
  const { refetchQuery, isRefecting } = useRefetch({ refetch, networkStatus });

  const scrollHandler = useRef<Animated.ScrollView | null>(null);
  const posts = (data?.getExplorePosts?.data as PostOutput[]) || [];

  const renderItem = ({ item: post, i }: IRenderItemType) => {
    return (
      <FeedCard
        innerRef={scrollHandler}
        key={post.id}
        post={post}
        postSection="Explore"
        posts={posts}
        initialIndex={i}
        navigateTo={RouteNames.ExplorePost}
      />
    );
  };

  return (
    <LocalMasonryList
      innerRef={scrollHandler}
      ListHeaderComponent={<ExploreHeader />}
      StickyComponent={<ExploreSearch />}
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
