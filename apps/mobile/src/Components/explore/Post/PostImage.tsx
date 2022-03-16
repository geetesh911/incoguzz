import React, { FC, useMemo, useState } from "react";
import { Dimensions, Image } from "react-native";
import { PinchableImage } from "../../shared";
import {
  StyledPotraitMedia,
  StyledImageContainer,
  StyledLandscapeMedia,
} from "./styled";

interface IPostImageProps {
  imgUrl: string;
}

const windowWidth = Dimensions.get("window").width;

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
    <StyledImageContainer>
      <PinchableImage
        imageComponent={
          aspectRatio > 1 ? (
            <StyledPotraitMedia
              aspectRatio={aspectRatio}
              source={{ uri: imgUrl }}
            />
          ) : (
            <StyledLandscapeMedia
              style={{ width: windowWidth * 0.9 }}
              aspectRatio={aspectRatio}
              source={{ uri: imgUrl }}
            />
          )
        }
      />
    </StyledImageContainer>
  );
};
