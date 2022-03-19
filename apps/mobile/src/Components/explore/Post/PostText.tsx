import React, { FC } from "react";
import {
  StyledPostText,
  StyledPostTextContainer,
  StyledPostTextScrollView,
} from "./styled";

interface IPostTextProps {
  text: string;
}

export const PostText: FC<IPostTextProps> = ({ text }) => {
  return (
    <StyledPostTextContainer>
      <StyledPostTextScrollView>
        <StyledPostText>{text}</StyledPostText>
      </StyledPostTextScrollView>
    </StyledPostTextContainer>
  );
};
