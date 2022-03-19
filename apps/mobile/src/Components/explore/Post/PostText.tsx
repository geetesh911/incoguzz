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
    <StyledPostTextContainer
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#FFDD00", "#FDCA16", "#FBB034"]}
    >
      <StyledPostTextScrollView>
        <StyledPostText>{text}</StyledPostText>
      </StyledPostTextScrollView>
    </StyledPostTextContainer>
  );
};
