import React, { FC } from "react";
import { PostImage } from "./PostImage";
import { StyledPostImageCarouselPagerView } from "./styled";

interface IPostImageCarouselProps {
  imgUrls: string[];
}

export const PostImageCarousel: FC<IPostImageCarouselProps> = ({ imgUrls }) => {
  return (
    <StyledPostImageCarouselPagerView
      initialPage={0}
      layoutDirection="ltr"
      overdrag={true}
      scrollEnabled={true}
      pageMargin={0}
      orientation="horizontal"
      transitionStyle="scroll"
      showPageIndicator={true}
    >
      {imgUrls.map((imageUrl, index) => (
        <PostImage key={`${imageUrl}${index}`} imgUrl={imageUrl} />
      ))}
    </StyledPostImageCarouselPagerView>
  );
};
