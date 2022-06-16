import React, { FC } from "react";
import {
  StyledHeaderCloseIcon,
  StyledHeaderContainer,
  StyledHeaderForwardIcon,
  StyledHeaderText,
} from "./styled";

export const AddPostHeader: FC = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderCloseIcon name="close" />
      <StyledHeaderText>New Post</StyledHeaderText>
      <StyledHeaderForwardIcon name="arrow-forward" />
    </StyledHeaderContainer>
  );
};
