import React, { FC } from "react";
import CameraRoll from "@react-native-community/cameraroll";
import { PinchableImage, VideoPlayer } from "../../shared";
import { StyledBigImage } from "./styled";

interface IPostImageCarouselProps {
  media: CameraRoll.PhotoIdentifier;
}

export const GalleryMediaViewer: FC<IPostImageCarouselProps> = ({ media }) => {
  if (!media?.node?.image?.uri) return null;

  return (
    <>
      {media?.node?.type.includes("video") ? (
        <VideoPlayer
          resizeMode={"contain"}
          style={{ flex: 1 }}
          poster={media?.node?.image?.uri}
          source={{ uri: media?.node?.image?.uri }}
          showFullScreenButton={false}
          disableControls
        />
      ) : (
        <PinchableImage
          imageComponent={
            <StyledBigImage source={{ uri: media?.node?.image?.uri }} />
          }
        />
      )}
    </>
  );
};
