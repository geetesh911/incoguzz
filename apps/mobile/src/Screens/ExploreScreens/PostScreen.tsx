import { PostOutput } from "@incoguzz/graphql";
import { useRoute } from "@react-navigation/native";
import React, { FC, useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import {
  LazyPagerView,
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import {
  Post,
  PostHeader,
  StyledPostPageContainer,
} from "../../Components/explore/Post";
import { PostScreenRouteProp } from "../../Navigation";

type IItemType = {
  item: PostOutput;
  index: number;
};

export const PostScreen: FC = () => {
  const route = useRoute<PostScreenRouteProp>();

  const pagerViewRef = useRef<LazyPagerView<PostOutput>>(null);

  const [activeIndex, setActiveIndex] = useState<number>(
    route?.params?.initialIndex,
  );
  const [posts, setPosts] = useState<PostOutput[]>(
    route?.params?.posts
      ? [route?.params?.posts[route?.params?.initialIndex]]
      : [],
  );

  useEffect(() => {
    setPosts(route?.params?.posts as PostOutput[]);
  }, []);

  useEffect(() => {
    if (posts.length > 1) {
      pagerViewRef.current?.setPageWithoutAnimation(
        route?.params?.initialIndex,
      );
    }
  }, [posts]);

  const keyExtractor = (item: PostOutput, index: number) =>
    `${item?.id}${index}`;

  const renderItem = ({ item: post, index }: IItemType) => (
    <StyledPostPageContainer>
      <Post post={post} unpauseVideo={activeIndex === index} />
    </StyledPostPageContainer>
  );

  return (
    <>
      <PostHeader
        heading={route?.params?.heading}
        bookmarked={posts?.[activeIndex]?.bookmarks?.length === 1}
        postId={posts?.[activeIndex]?.id}
      />
      <LazyPagerView
        initialPage={route?.params?.initialIndex}
        ref={pagerViewRef}
        overdrag={true}
        scrollEnabled={true}
        pageMargin={0}
        orientation="vertical"
        buffer={10}
        maxRenderWindow={30}
        transitionStyle="scroll"
        showPageIndicator={true}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={posts}
        style={styles.lazyPagerView}
        onPageSelected={(event: PagerViewOnPageSelectedEvent) => {
          setActiveIndex(event?.nativeEvent?.position);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  lazyPagerView: {
    width: "100%",
    // height: 100,
    flex: 1,
  },
});
