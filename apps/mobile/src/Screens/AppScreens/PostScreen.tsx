import { GetAllPostsOutput } from "@incoguzz/graphql";
import { useRoute } from "@react-navigation/native";
import React, { FC, useEffect, useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import {
  Post,
  StyledAnimatedPagerView,
  StyledPostPageContainer,
} from "../../Components/explore/Post";
import { PageHeader } from "../../Components/shared";
import { PostScreenRouteProp } from "../../Navigation";

export const PostScreen: FC = () => {
  const route = useRoute<PostScreenRouteProp>();

  const pagerViewRef = useRef<PagerView>(null);

  const [activeIndex, setActiveIndex] = useState<number>(
    route?.params?.initialIndex,
  );
  const [posts, setPosts] = useState<GetAllPostsOutput[]>(
    // route?.params?.posts
    //   ? [route?.params?.posts[route?.params?.initialIndex]]
    //   :
    [],
  );

  useEffect(() => {
    setPosts(route?.params?.posts as GetAllPostsOutput[]);
  }, []);

  useEffect(() => {
    if (posts.length > 1) {
      pagerViewRef.current?.setPage(route?.params?.initialIndex);
    }
  }, [posts]);

  return (
    <>
      <PageHeader text={route?.params?.heading} />
      {posts.length > 0 ? (
        <StyledAnimatedPagerView
          initialPage={route?.params?.initialIndex}
          layoutDirection="ltr"
          ref={pagerViewRef}
          overdrag={true}
          scrollEnabled={true}
          pageMargin={0}
          orientation="vertical"
          transitionStyle="scroll"
          showPageIndicator={true}
          onPageSelected={e => setActiveIndex(e?.nativeEvent?.position)}
        >
          {posts.map((post, index) => (
            <StyledPostPageContainer key={`${post?.id}${index}`}>
              <Post post={post} unpauseVideo={activeIndex === index} />
            </StyledPostPageContainer>
          ))}
        </StyledAnimatedPagerView>
      ) : (
        <StyledPostPageContainer
          key={`${
            route?.params?.posts && route?.params?.posts[activeIndex]?.id
          }${activeIndex}`}
        >
          {route?.params?.posts && (
            <Post
              post={route?.params?.posts[activeIndex]}
              unpauseVideo={activeIndex === activeIndex}
            />
          )}
        </StyledPostPageContainer>
      )}
    </>
  );
};
