import React, { FC, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import { useQuery } from "@apollo/client";
import {
  PostOutput,
  GetUserPostsDocument,
  GetUserPostsQuery,
  GetUserPostsQueryVariables,
} from "@incoguzz/graphql";
import { RouteNames } from "../../../Navigation/constants";
import { FeedCard } from "../../explore";
import { IRenderItemType } from "./BookmarksBody";

export const UserPostsBody: FC = () => {
  const { data } = useQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(
    GetUserPostsDocument,
    {
      variables: { paginationInput: { take: 5, firstQueryResult: true } },
    },
  );
  const scrollHandler = useRef<ScrollView>();

  const renderItem = ({ item: post, i }: IRenderItemType) => {
    return (
      <FeedCard
        postSection="Bookmarks"
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
    <MasonryList
      innerRef={scrollHandler}
      contentContainerStyle={styles.masonryList}
      numColumns={2}
      data={(data?.getUserPosts?.data as PostOutput[]) || []}
      loading={false}
      renderItem={renderItem}
      onRefresh={() => console.log("refresh")}
      onEndReached={() => null}
      onEndReachedThreshold={0.2}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  masonryList: {
    paddingHorizontal: 10,
    alignSelf: "stretch",
  },
});
