import React, { FC } from "react";
import {
  StyledCaptionContainer,
  StyledCaptionText,
  StyledPostContainer,
  StyledReactionsContainer,
  StyledReactionsEmoji,
} from "./styled";
import { PostVideo } from "./PostVideo";
import { PostImage } from "./PostImage";

interface IPostProps {
  url: string;
}

export const Post: FC<IPostProps> = ({ url }) => {
  return (
    <>
      <StyledPostContainer>
        {/* <PostVideo videoUrl={url} /> */}
        <PostImage imgUrl={url} />
      </StyledPostContainer>
      <StyledReactionsContainer>
        {["👏", "😲", "💯", "🔥", "🤩"].map(emoji => (
          <StyledReactionsEmoji key={emoji}>{emoji}</StyledReactionsEmoji>
        ))}
      </StyledReactionsContainer>
      <StyledCaptionContainer>
        <StyledCaptionText>
          Architecture fans document their favorite structures.
        </StyledCaptionText>
      </StyledCaptionContainer>
    </>
  );
};
