import React, { FC, useState } from "react";
import {
  Dimensions,
  ImageLoadEventData,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
} from "react-native";
import { PinchableImage } from "../../shared";
import {
  StyledPotraitMedia,
  StyledImageContainer,
  StyledLandscapeMedia,
} from "./styled";

interface IPostImageProps {
  imgUrl: string;
  onPress: () => void;
}

const windowWidth = Dimensions.get("window").width;

export const PostImage: FC<IPostImageProps> = ({ imgUrl, onPress }) => {
  const [aspectRatio, setAspectRatio] = useState<number>(0);

  const onImageLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { height, width } = event?.nativeEvent?.source;
    setAspectRatio(height / width);
  };

  return (
    <StyledImageContainer>
      <PinchableImage
        imageComponent={
          aspectRatio > 1 ? (
            <Pressable onPress={onPress}>
              <StyledPotraitMedia
                aspectRatio={aspectRatio}
                source={{ uri: imgUrl }}
                onLoad={onImageLoad}
              />
            </Pressable>
          ) : (
            <StyledImageContainer
              onPress={onPress}
              style={styles.landscapeImageContainer}
            >
              <StyledLandscapeMedia
                style={styles.landscapeImage}
                aspectRatio={aspectRatio}
                source={{ uri: imgUrl }}
                onLoad={onImageLoad}
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
