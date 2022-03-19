import React, { FC, useMemo, useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
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
            <StyledImageContainer style={styles.landscapeImageContainer}>
              <StyledLandscapeMedia
                style={styles.landscapeImage}
                aspectRatio={aspectRatio}
                source={{ uri: imgUrl }}
              />
            </StyledImageContainer>
          )
        }
      />
    </StyledImageContainer>
  );
};

const styles = StyleSheet.create({
  landscapeImageContainer: {
    height: windowWidth * 0.9 * (4 / 3),
  },
  landscapeImage: {
    width: windowWidth * 0.9,
  },
});
