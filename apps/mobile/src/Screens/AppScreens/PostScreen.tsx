import { GetAllPostsOutput } from "@incoguzz/graphql";
import { useRoute } from "@react-navigation/native";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  LazyPagerView,
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import {
  Post,
  StyledAnimatedPagerView,
  StyledPostPageContainer,
} from "../../Components/explore/Post";
import { PageHeader } from "../../Components/shared";
import { PostScreenRouteProp } from "../../Navigation";

type IItemType = {
  item: GetAllPostsOutput;
  index: number;
};

export const PostScreen: FC = () => {
  const route = useRoute<PostScreenRouteProp>();

  const pagerViewRef = useRef<LazyPagerView<GetAllPostsOutput>>(null);

  const [activeIndex, setActiveIndex] = useState<number>(
    route?.params?.initialIndex,
  );
  const [posts, setPosts] = useState<GetAllPostsOutput[]>(
    route?.params?.posts
      ? [route?.params?.posts[route?.params?.initialIndex]]
      : [],
  );

  useEffect(() => {
    setPosts(route?.params?.posts as GetAllPostsOutput[]);
  }, []);

  useEffect(() => {
    if (posts.length > 1) {
      pagerViewRef.current?.setPageWithoutAnimation(
        route?.params?.initialIndex,
      );
    }
  }, [posts]);

  const keyExtractor = (post: GetAllPostsOutput, index: number) =>
    `${post?.id}${index}`;

  const renderItem = ({ item: post, index }: IItemType) => (
    <StyledPostPageContainer>
      <Post post={post} unpauseVideo={activeIndex === index} />
    </StyledPostPageContainer>
  );

  return (
    <>
      <PageHeader text={route?.params?.heading} />
      <StyledAnimatedPagerView
        initialPage={route?.params?.initialIndex}
        layoutDirection="ltr"
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
        onPageSelected={(event: PagerViewOnPageSelectedEvent) =>
          setActiveIndex(event?.nativeEvent?.position)
        }
      />
    </>
  );
};
