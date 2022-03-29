import React, { FC, useState } from "react";
import { PagerViewOnPageSelectedEvent } from "react-native-pager-view";
import { FullScreenImage } from "../../shared";
import { ImageCarouselIndicator } from "./ImageCarouselIndicator";
import { PostImage } from "./PostImage";
import { StyledPostImageCarouselPagerView } from "./styled";

interface IPostImageCarouselProps {
  imgUrls: string[];
}

export const PostImageCarousel: FC<IPostImageCarouselProps> = ({ imgUrls }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFullScreenModal, setIsFullScreenModal] = useState<boolean>(false);

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
        onPageSelected={(event: PagerViewOnPageSelectedEvent) =>
          setActiveIndex(event?.nativeEvent?.position)
        }
      >
        {imgUrls.map((imageUrl, index) => (
          <PostImage
            key={`${imageUrl}${index}`}
            imgUrl={imageUrl}
            onPress={() => setIsFullScreenModal(true)}
          />
        ))}
      </StyledPostImageCarouselPagerView>
      <ImageCarouselIndicator
        totalImages={imgUrls.length}
        activeIndex={activeIndex}
      />
      <FullScreenImage
        open={isFullScreenModal}
        onClose={() => setIsFullScreenModal(false)}
        images={imgUrls.map(url => ({ url }))}
        index={activeIndex}
      />
    </>
  );
};
