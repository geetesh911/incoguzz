import React, { FC } from "react";
import {
  StyledImageCarouselContainer,
  StyledImageCarouselIndicator,
  StyledImageCarouselIndicatorContainer,
} from "./styled";

interface IImageCarouselIndicatorProps {
  totalImages: number;
  activeIndex: number;
}

export const ImageCarouselIndicator: FC<IImageCarouselIndicatorProps> = ({
  totalImages,
  activeIndex,
}) => {
  return (
    <StyledImageCarouselContainer>
      <StyledImageCarouselIndicatorContainer>
        {[...Array(totalImages).keys()].map(index => (
          <StyledImageCarouselIndicator
            key={`indicator${index}`}
            active={activeIndex === index}
          />
        ))}
      </StyledImageCarouselIndicatorContainer>
    </StyledImageCarouselContainer>
  );
};
