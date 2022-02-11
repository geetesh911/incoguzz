import React, { FC, useMemo, useState } from "react";
import { Image, Modal } from "react-native";
import { StyledModalContainer, StyledModalPost } from "./styled";
import {
  FadeIn,
  FadeOut,
  Layout,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";

interface IPostModalProps {
  open: boolean;
  imgUrl: string;
}

export const PostModal: FC<IPostModalProps> = ({ open, imgUrl }) => {
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
    <Modal animationType="fade" transparent={true} visible={open}>
      <StyledModalContainer entering={FadeIn} exiting={FadeOut}>
        <StyledModalPost
          aspectRatio={aspectRatio}
          source={{ uri: imgUrl }}
          entering={ZoomIn}
          exiting={ZoomOut}
          layout={Layout.delay(100)}
        />
      </StyledModalContainer>
    </Modal>
  );
};
