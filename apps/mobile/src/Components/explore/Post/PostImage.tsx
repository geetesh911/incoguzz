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
}

const windowWidth = Dimensions.get("window").width;

export const PostImage: FC<IPostImageProps> = ({ imgUrl, onPress }) => {
  const theme = useTheme();
  const [aspectRatio, setAspectRatio] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const onImageLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { height, width } = event?.nativeEvent?.source;
    setAspectRatio(height / width);
    setLoading(false);
  };

  const onImageLoadStart = () => {
    setLoading(true);
  };

  const onError = () => {
    setLoading(false);
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
                onLoadStart={onImageLoadStart}
                onError={onError}
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
