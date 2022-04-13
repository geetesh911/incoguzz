import React, { FC, useMemo, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { StyledBookmarksContainer, StyledFeedCard } from "../Body/styled";
import LocalMasonryList from "../../shared/List/MasonryList";
import {
  GetBookmarkedPostsDocument,
  GetBookmarkedPostsQuery,
  GetBookmarkedPostsQueryVariables,
  PostOutput,
} from "@incoguzz/graphql";
import { RouteNames } from "../../../Navigation/constants";
import { useQuery } from "@apollo/client";
import { BookmarksBodyContentLoader } from "./BookmarksBodyContentLoader";
import Animated from "react-native-reanimated";

export type IRenderItemType = {
  item: PostOutput;
  i: number;
};

export const BookmarksBody: FC = () => {
  const { data, loading } = useQuery<
    GetBookmarkedPostsQuery,
    GetBookmarkedPostsQueryVariables
  >(GetBookmarkedPostsDocument, {
    variables: { paginationInput: { take: 5, firstQueryResult: true } },
  });

  const scrollHandler = useRef<Animated.ScrollView | null>(null);
  const posts =
    (useMemo(
      () =>
        data?.getBookmarkedPosts?.data.map(bookmarkPost => bookmarkPost?.post),
      [data],
    ) as PostOutput[]) || [];

  const renderItem = ({ item: post, i }: IRenderItemType) => {
    return (
      <StyledFeedCard
        postSection="Bookmarks"
        height={150}
        width={150}
        innerRef={scrollHandler}
        key={post.id}
        post={post}
        posts={posts}
        initialIndex={i}
        navigateTo={RouteNames.BookmarksPost}
      />
    );
  };

  return (
    <StyledBookmarksContainer>
      <LocalMasonryList
        innerRef={scrollHandler}
        contentContainerStyle={styles.masonryList}
        numColumns={1}
        data={posts}
        loading={loading}
        renderItem={renderItem}
        onRefresh={() => console.log("refresh")}
        onEndReached={() => null}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        LoadingView={<BookmarksBodyContentLoader />}
      />
    </StyledBookmarksContainer>
  );
};

const styles = StyleSheet.create({
  masonryList: {
    paddingHorizontal: 10,
    alignSelf: "stretch",
  },
});
