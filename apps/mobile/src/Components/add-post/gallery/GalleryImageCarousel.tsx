import React, { FC, useState } from "react";
import { Image } from "react-native";
import { PagerViewOnPageSelectedEvent } from "react-native-pager-view";
import { ImageCarouselIndicator } from "../../explore/Post/ImageCarouselIndicator";
import { FullScreenImage } from "../../shared";
import { StyledGalleryImageCarouselPagerView } from "./styled";

interface IPostImageCarouselProps {
  imgUrls: string[];
}

export const GalleryImageCarousel: FC<IPostImageCarouselProps> = ({
  imgUrls,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <StyledGalleryImageCarouselPagerView
        initialPage={0}
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
          <Image key={`${imageUrl}${index}`} source={{ uri: imageUrl }} />
        ))}
      </StyledGalleryImageCarouselPagerView>
      <ImageCarouselIndicator
        totalImages={imgUrls.length}
        activeIndex={activeIndex}
      />
    </>
  );
};
