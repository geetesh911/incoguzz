import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import {
  StyledImageCarouselContainer,
  StyledImageCarouselIndicator,
  StyledImageCarouselIndicatorContainer,
} from "./styled";

interface IImageCarouselIndicatorProps {
  totalImages: number;
  activeIndex: number;
  style?: StyleProp<ViewStyle>;
}

export const ImageCarouselIndicator: FC<IImageCarouselIndicatorProps> = ({
  totalImages,
  activeIndex,
  style,
}) => {
  return (
    <StyledImageCarouselContainer style={style}>
      <StyledImageCarouselIndicatorContainer>
        {totalImages > 1 &&
          [...Array(totalImages).keys()].map(index => (
            <StyledImageCarouselIndicator
              key={`indicator${index}`}
              active={activeIndex === index}
            />
          ))}
      </StyledImageCarouselIndicatorContainer>
    </StyledImageCarouselContainer>
  );
};
