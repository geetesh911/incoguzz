import React, { FC, useState } from "react";
import { ImageLoadEventData, NativeSyntheticEvent } from "react-native";
import { IMediaProperties } from "../../explore";
import { FullScreenImage } from "../../shared";
import {
  StyledBookmarksContainer,
  StyledBookmarksImage,
  StyledBookmarksImageContainer,
  StyledBookmarksScrollView,
} from "./styled";

export const BookmarksBody: FC = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imageDimensions, setImageDimensions] = useState<{
    [key: string]: IMediaProperties;
  }>({});

  const onImageLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { height, width, uri } = event?.nativeEvent?.source;

    setImageDimensions({ ...imageDimensions, [uri]: { height, width } });
  };

  const onImagePress = (index: number) => {
    setActiveIndex(index);
    setIsFullScreen(true);
  };

  const images = [
    "https://res.cloudinary.com/geeteshpp/image/upload/v1647415142/mountain-climber_jjis3c.jpg",
    "https://res.cloudinary.com/geeteshpp/image/upload/v1644933320/0fdddf59-419f-4479-8658-1e6ab58bfc9f_62b34b08-0562-4d59-a61f-f7344c80cc9aRW20seconds_1_thumbnail_xth8dk.jpg",
    "https://res.cloudinary.com/geeteshpp/image/upload/v1640068319/sample.jpg",
    "https://res.cloudinary.com/geeteshpp/image/upload/v1647496797/Screenshot_2022-03-17_112932_dytkzv.png",
  ];

  return (
    <StyledBookmarksContainer>
      <StyledBookmarksScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {images.map((imageUrl, index) => (
          <StyledBookmarksImageContainer
            key={imageUrl}
            onPress={() => onImagePress(index)}
          >
            <StyledBookmarksImage
              source={{ uri: imageUrl }}
              onLoad={onImageLoad}
              height={imageDimensions[imageUrl]?.height || 200}
              width={imageDimensions[imageUrl]?.width || 200}
            />
          </StyledBookmarksImageContainer>
        ))}
      </StyledBookmarksScrollView>
      <FullScreenImage
        open={isFullScreen}
        images={images.map(imageUrl => ({ url: imageUrl }))}
        index={activeIndex}
        onClose={() => setIsFullScreen(false)}
      />
    </StyledBookmarksContainer>
  );
};
