import React, { FC, useMemo, useState } from "react";
import { Image } from "react-native";
import { PinchableImage } from "../../shared";
import { StyledMedia, StyledMediaContainer } from "./styled";

interface IPostImageProps {
  imgUrl: string;
}

export const PostImage: FC<IPostImageProps> = ({ imgUrl }) => {
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
    <StyledMediaContainer>
      <PinchableImage
        imageComponent={
          <StyledMedia aspectRatio={aspectRatio} source={{ uri: imgUrl }} />
        }
      />
    </StyledMediaContainer>
  );
};
