import React, { FC, useRef } from "react";
import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import {
  GetAllPostsQuery,
  GetAllPostsQueryVariables,
  GetAllPostsDocument,
  GetPostsOutput,
} from "@incoguzz/graphql";
import LocalMasonryList from "../../shared/List/MasonryList";
import { FeedCard } from "./FeedCard";
import { ExploreHeader } from "../ExploreHeader";
import { FeedContentLoader } from "./FeedContentLoader";
import { RouteNames } from "../../../Navigation/constants";
import Animated from "react-native-reanimated";
import ExploreSearch from "../ExploreSearch";
import { IRenderItemType } from "../../user/Body/BookmarksBody";

export const Feed: FC = () => {
  const { data, loading } = useQuery<
    GetAllPostsQuery,
    GetAllPostsQueryVariables
  >(GetAllPostsDocument);

  const scrollHandler = useRef<Animated.ScrollView | null>(null);

  const renderItem = ({ item: post, i }: IRenderItemType) => {
    return (
      <FeedCard
        innerRef={scrollHandler}
        key={post.id}
        post={post}
        postSection="Explore"
        posts={(data?.getAllPosts as GetPostsOutput[]) || []}
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
      contentContainerStyle={styles.masonryList}
      numColumns={2}
      data={(data?.getAllPosts as GetPostsOutput[]) || []}
      loading={loading}
      renderItem={renderItem}
      onRefresh={() => console.log("refresh")}
      onEndReached={() => null}
      onEndReachedThreshold={0.2}
      showsVerticalScrollIndicator={false}
      LoadingView={<FeedContentLoader />}
    />
  );
};

const styles = StyleSheet.create({
  masonryList: {
    paddingHorizontal: 10,
    alignSelf: "stretch",
  },
});
