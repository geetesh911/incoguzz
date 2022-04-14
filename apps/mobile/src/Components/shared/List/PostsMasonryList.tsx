import React, { useRef } from "react";
import { QueryResult } from "@apollo/client";
import { PostOutput } from "@incoguzz/graphql";
import LocalMasonryList, { LocalMasonryListProps } from "./MasonryList";
import Animated from "react-native-reanimated";
import { IRenderItemType } from "../../user/Bookmarks/BookmarksBody";
import { masonaryListStyles } from "./styled";
import { useRefetch } from "../../../hooks";
import { FeedCard, IFeedCardProps } from "../../explore/Feed/FeedCard";
import { FeedContentLoader } from "../../explore/Feed/FeedContentLoader";
import { PageHeader } from "../Header/PageHeader";

type IListFeedCardProps = Pick<IFeedCardProps, "postSection" | "navigateTo">;
interface IPostsMasonryListProps<TData, TVariables>
  extends Partial<LocalMasonryListProps<PostOutput>> {
  posts: PostOutput[];
  query: QueryResult<TData, TVariables>;
  pageHeader?: string;
  feedCardProps: IListFeedCardProps;
}

export const PostsMasonryList = <TData, TVariables>(
  props: IPostsMasonryListProps<TData, TVariables>,
) => {
  const { query, posts, pageHeader, feedCardProps, ...masonaryListProps } =
    props;

  const { refetch, networkStatus, loading } = query;
  const { refetchQuery, isRefecting } = useRefetch({ refetch, networkStatus });

  const scrollHandler = useRef<Animated.ScrollView | null>(null);

  const renderItem = ({ item: post, i }: IRenderItemType) => {
    return (
      <FeedCard
        innerRef={scrollHandler}
        key={post.id}
        post={post}
        posts={posts}
        initialIndex={i}
        {...feedCardProps}
      />
    );
  };

  return (
    <LocalMasonryList
      innerRef={scrollHandler}
      StickyComponent={
        <PageHeader text={pageHeader || feedCardProps?.postSection} />
      }
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
      {...masonaryListProps}
    />
  );
};
