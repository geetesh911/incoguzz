import React, { FC, useRef } from "react";
import { Option, UserBody, UserHeader } from "../../Components/user";
import { StyleSheet } from "react-native";
import {
  GetPostsOutput,
  GetUserPostsQuery,
  GetUserPostsQueryVariables,
  GetUserPostsDocument,
} from "@incoguzz/graphql";
import { RouteNames } from "../../Navigation/constants";
import { FeedCard } from "../../Components/explore";
import LocalMasonryList from "../../Components/shared/List/MasonryList";
import { IRenderItemType } from "../../Components/user/Body/BookmarksBody";
import Animated from "react-native-reanimated";
import { ImageIcon } from "../../Components/icons";
import { useQuery } from "@apollo/client";
import { FeedContentLoader } from "../../Components/explore/Feed/FeedContentLoader";

export const UserInfoScreen: FC = () => {
  const { data, loading } = useQuery<
    GetUserPostsQuery,
    GetUserPostsQueryVariables
  >(GetUserPostsDocument);

  const scrollHandler = useRef<Animated.ScrollView | null>(null);

  const renderItem = ({ item: post, i }: IRenderItemType) => {
    return (
      <FeedCard
        postSection="Bookmarks"
        innerRef={scrollHandler}
        key={post.id}
        post={post}
        posts={(data?.getUserPosts as GetPostsOutput[]) || []}
        initialIndex={i}
        navigateTo={RouteNames.BookmarksPost}
      />
    );
  };
  return (
    <>
      <UserHeader />
      <LocalMasonryList
        innerRef={scrollHandler}
        ListHeaderComponent={<UserBody />}
        StickyComponent={<Option label="Posts" Icon={ImageIcon} style={[]} />}
        contentContainerStyle={styles.masonryList}
        numColumns={2}
        data={(data?.getUserPosts as GetPostsOutput[]) || []}
        loading={loading}
        renderItem={renderItem}
        onRefresh={() => console.log("refresh")}
        onEndReached={() => null}
        onEndReachedThreshold={0.2}
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        LoadingView={<FeedContentLoader />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  masonryList: {
    paddingHorizontal: 10,
    alignSelf: "stretch",
  },
});
