import React, { FC, useState } from "react";
import { ImageCarouselIndicator } from "./ImageCarouselIndicator";
import { PostImage } from "./PostImage";
import { StyledPostImageCarouselPagerView } from "./styled";

interface IPostImageCarouselProps {
  imgUrls: string[];
}

export const PostImageCarousel: FC<IPostImageCarouselProps> = ({ imgUrls }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <StyledPostImageCarouselPagerView
        initialPage={0}
        layoutDirection="ltr"
        overdrag={true}
        scrollEnabled={true}
        pageMargin={0}
        orientation="horizontal"
        transitionStyle="scroll"
        showPageIndicator={true}
        onPageSelected={e => setActiveIndex(e?.nativeEvent?.position)}
      >
        {imgUrls.map((imageUrl, index) => (
          <PostImage
            key={`${imageUrl}${index}`}
            totalImages={imgUrls.length}
            activeIndex={index === 0}
            imgUrl={imageUrl}
          />
        ))}
      </StyledPostImageCarouselPagerView>
      <ImageCarouselIndicator
        totalImages={imgUrls.length}
        activeIndex={activeIndex}
      />
    </>
  );
};
