import React, { FC, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { StyledBookmarksContainer, StyledFeedCard } from "./styled";
import MasonryList from "@react-native-seoul/masonry-list";
import {
  GetUserPostsDocument,
  GetUserPostsQuery,
  GetUserPostsQueryVariables,
  PostOutput,
} from "@incoguzz/graphql";
import { RouteNames } from "../../../Navigation/constants";
import { useQuery } from "@apollo/client";
import { BookmarksBodyContentLoader } from "./BookmarksBodyContentLoader";

export type IRenderItemType = {
  item: PostOutput;
  i: number;
};

export const BookmarksBody: FC = () => {
  const { data, loading } = useQuery<
    GetUserPostsQuery,
    GetUserPostsQueryVariables
  >(GetUserPostsDocument, {
    variables: { paginationInput: { take: 5, firstQueryResult: true } },
  });

  const scrollHandler = useRef<ScrollView>();

  const renderItem = ({ item: post, i }: IRenderItemType) => {
    return (
      <StyledFeedCard
        postSection="Bookmarks"
        height={150}
        width={150}
        innerRef={scrollHandler}
        key={post.id}
        post={post}
        posts={(data?.getUserPosts?.data as PostOutput[]) || []}
        initialIndex={i}
        navigateTo={RouteNames.BookmarksPost}
      />
    );
  };

  return (
    <StyledBookmarksContainer>
      <MasonryList
        innerRef={scrollHandler}
        contentContainerStyle={styles.masonryList}
        numColumns={1}
        data={data?.getUserPosts?.data || []}
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
