import React, { FC, useState } from "react";
import {
  Dimensions,
  ImageLoadEventData,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
} from "react-native";
import { useTheme } from "../../../styles/theme";
import { LoadingIcon, PinchableImage } from "../../shared";
import {
  StyledPotraitMedia,
  StyledImageContainer,
  StyledLandscapeMedia,
  StyledLoadingContainer,
} from "./styled";

interface IPostImageProps {
  imgUrl: string;
  onPress?: () => void;
  ratio?: number;
}

const windowWidth = Dimensions.get("window").width;

export const PostImage: FC<IPostImageProps> = ({ imgUrl, onPress, ratio }) => {
  const theme = useTheme();
  const [aspectRatio, setAspectRatio] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const onImageLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { height, width } = event?.nativeEvent?.source;
    setAspectRatio(height / width);
    setLoading(false);
  };

  const onImageLoadEnd = () => {
    setLoading(false);
  };

  const onImageLoadStart = () => {
    setLoading(true);
  };

  const onError = () => {
    setLoading(false);
  };

  return (
    <StyledImageContainer ratio={ratio}>
      <PinchableImage
        imageComponent={
          aspectRatio > 1 ? (
            <Pressable onPress={onPress}>
              <StyledPotraitMedia
                ratio={ratio}
                aspectRatio={aspectRatio}
                source={{ uri: imgUrl }}
                onLoad={onImageLoad}
                onLoadEnd={onImageLoadEnd}
                onLoadStart={onImageLoadStart}
                onError={onError}
              />
            </Pressable>
          ) : (
            <StyledImageContainer
              onPress={onPress}
              ratio={ratio}
              style={styles.landscapeImageContainer}
            >
              <StyledLandscapeMedia
                ratio={ratio}
                style={styles.landscapeImage}
                aspectRatio={aspectRatio}
                source={{ uri: imgUrl }}
                onLoad={onImageLoad}
                onLoadEnd={onImageLoadEnd}
                onLoadStart={onImageLoadStart}
                onError={onError}
              />
            </StyledImageContainer>
          )
        }
      />

      {loading && (
        <StyledLoadingContainer>
          <LoadingIcon color={theme.textColors?.primary} />
        </StyledLoadingContainer>
      )}
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
