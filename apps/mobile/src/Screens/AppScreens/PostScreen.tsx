import { GetPostsOutput } from "@incoguzz/graphql";
import { useRoute } from "@react-navigation/native";
import React, { FC, useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import {
  LazyPagerView,
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import { Post, StyledPostPageContainer } from "../../Components/explore/Post";
import { PageHeader } from "../../Components/shared";
import { PostScreenRouteProp } from "../../Navigation";

type IItemType = {
  item: GetPostsOutput;
  index: number;
};

export const PostScreen: FC = () => {
  const route = useRoute<PostScreenRouteProp>();

  const pagerViewRef = useRef<LazyPagerView<GetPostsOutput>>(null);

  const [activeIndex, setActiveIndex] = useState<number>(
    route?.params?.initialIndex,
  );
  const [posts, setPosts] = useState<GetPostsOutput[]>(
    route?.params?.posts
      ? [route?.params?.posts[route?.params?.initialIndex]]
      : [],
  );

  useEffect(() => {
    setPosts(route?.params?.posts as GetPostsOutput[]);
  }, []);

  useEffect(() => {
    if (posts.length > 1) {
      pagerViewRef.current?.setPageWithoutAnimation(
        route?.params?.initialIndex,
      );
    }
  }, [posts]);

  const keyExtractor = (item: GetPostsOutput, index: number) =>
    `${item?.id}${index}`;

  const renderItem = ({ item: post, index }: IItemType) => (
    <StyledPostPageContainer>
      <Post post={post} unpauseVideo={activeIndex === index} />
    </StyledPostPageContainer>
  );

  return (
    <>
      <PageHeader text={route?.params?.heading} />
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
    height: 100,
    flex: 1,
  },
});
