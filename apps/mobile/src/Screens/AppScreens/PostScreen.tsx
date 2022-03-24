import React, { FC, useState } from "react";
import {
  Post,
  StyledAnimatedPagerView,
  StyledPostPageContainer,
} from "../../Components/explore/Post";
import { PostHeader } from "../../Components/explore/Post/PostHeader";
import { useAppSelector } from "../../redux/hooks";

export const PostScreen: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const selectedPost = useAppSelector(state => state.post.selectedPost);

  return (
    <>
      <PostHeader />
      <StyledAnimatedPagerView
        initialPage={0}
        layoutDirection="ltr"
        overdrag={true}
        scrollEnabled={true}
        pageMargin={0}
        orientation="vertical"
        transitionStyle="scroll"
        showPageIndicator={true}
        onPageSelected={e => setActiveIndex(e?.nativeEvent?.position)}
      >
        {selectedPost &&
          [selectedPost, selectedPost, selectedPost].map((post, index) => (
            <StyledPostPageContainer key={`${post?.id}${index}`}>
              <Post post={post} unpauseVideo={activeIndex === index} />
            </StyledPostPageContainer>
          ))}
      </StyledAnimatedPagerView>
    </>
  );
};
