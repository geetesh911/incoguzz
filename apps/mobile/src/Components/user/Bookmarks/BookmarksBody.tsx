import React, { FC, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import {
  GetBookmarkedPostsDocument,
  GetBookmarkedPostsQuery,
  GetBookmarkedPostsQueryVariables,
  PostOutput,
} from "@incoguzz/graphql";
import { useQuery } from "@apollo/client";
import Animated from "react-native-reanimated";
import LocalMasonryList from "../../shared/List/MasonryList";
import { StyledBookmarksContainer, StyledFeedCard } from "../Body/styled";
import { RouteNames } from "../../../Navigation/constants";
import { BookmarksBodyContentLoader } from "./BookmarksBodyContentLoader";

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
    useMemo(
      () =>
        data?.getBookmarkedPosts?.data.map(
          bookmarkPost => bookmarkPost?.post,
        ) as PostOutput[],
      [data],
    ) || [];

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
