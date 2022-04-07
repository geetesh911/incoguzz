import React, { FC, useRef } from "react";
import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import {
  GetExplorePostsQuery,
  GetExplorePostsQueryVariables,
  GetExplorePostsDocument,
  PostOutput,
} from "@incoguzz/graphql";
import LocalMasonryList from "../../shared/List/MasonryList";
import { FeedContentLoader } from "../../explore/Feed/FeedContentLoader";
import { ScreenHeader } from "../../shared";
import Animated from "react-native-reanimated";
import { FeedCard } from "../../explore";
import { RouteNames } from "../../../Navigation/constants";
import { IRenderItemType } from "../Body/BookmarksBody";

export const UserBookmarks: FC = () => {
  const { data, loading } = useQuery<
    GetExplorePostsQuery,
    GetExplorePostsQueryVariables
  >(GetExplorePostsDocument, {
    variables: { paginationInput: { take: 5, firstQueryResult: true } },
  });

  const scrollHandler = useRef<Animated.ScrollView | null>(null);

  const renderItem = ({ item: post, i }: IRenderItemType) => {
    return (
      <FeedCard
        innerRef={scrollHandler}
        key={post.id}
        post={post}
        postSection="Bookmarks"
        posts={(data?.getExplorePosts?.data as PostOutput[]) || []}
        initialIndex={i}
        navigateTo={RouteNames.BookmarksPost}
      />
    );
  };

  return (
    <LocalMasonryList
      innerRef={scrollHandler}
      ListHeaderComponent={<ScreenHeader heading="Bookmarks" />}
      contentContainerStyle={styles.masonryList}
      numColumns={2}
      data={(data?.getExplorePosts?.data as PostOutput[]) || []}
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
