import React, { FC, useMemo, useState } from "react";
import { Image, Text } from "react-native";
import {
  StyledCaptionContainer,
  StyledCaptionText,
  StyledMedia,
  StyledMediaContainer,
  StyledPostContainer,
  StyledReactionsContainer,
  StyledReactionsEmoji,
} from "./styled";

interface IPostProps {
  imgUrl: string;
}

export const Post: FC<IPostProps> = ({ imgUrl }) => {
  const [aspectRatio, setAspectRatio] = useState<number>(0);

  useMemo(
    () =>
      Image.getSize(
        imgUrl,
        (imageWidth, imageHeight) => {
          setAspectRatio(imageHeight / imageWidth);
        },
        error => {
          console.error(`Couldn't get the image size: ${error.message}`);
        },
      ),
    [],
  );
  return (
    <>
      <StyledPostContainer>
        <StyledMediaContainer>
          <StyledMedia aspectRatio={aspectRatio} source={{ uri: imgUrl }} />
        </StyledMediaContainer>
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
