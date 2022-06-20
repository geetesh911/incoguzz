import React, { FC } from "react";
import { StyledBigImage } from "./styled";
import CameraRoll from "@react-native-community/cameraroll";
import { VideoPlayer } from "../../shared";

interface IPostImageCarouselProps {
  media?: CameraRoll.PhotoIdentifier;
  selectedMedia: string;
  selectedMediaType: "image" | "video";
}

export const GalleryImageCarousel: FC<IPostImageCarouselProps> = ({
  media,
  selectedMedia,
  selectedMediaType,
}) => {
  console.log(selectedMedia, selectedMediaType, media);
  return (
    <>
      {selectedMediaType === "video" ? (
        <VideoPlayer
          resizeMode={"contain"}
          style={{ flex: 1 }}
          // onLoad={onVideoLoad}
          poster={media?.node?.image?.uri}
          source={{ uri: selectedMedia || media?.node?.image?.uri }}
          showFullScreenButton={false}
        />
      ) : (
        <StyledBigImage
          source={{
            uri: selectedMedia || media?.node?.image?.uri,
          }}
          style={{ borderWidth: 1 }}
        />
      )}
    </>
  );
};
