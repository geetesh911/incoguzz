import React, { FC, useEffect } from "react";
import { Modal } from "react-native";
import { FullScreenHelper } from "../../../helpers/fullScreen";
import {
  StyledFullScreenImage,
  StyledFullScreenImageCloseButton,
  StyledFullScreenImageCloseIcon,
  StyledFullScreenImageContainer,
  StyledFullScreenImageHeader,
  StyledFullScreenImageImageContainer,
} from "./styled";

interface IFullScreenImageProps {
  open: boolean;
  onClose?: () => void;
}

export const FullScreenImage: FC<IFullScreenImageProps> = ({
  open,
  onClose,
}) => {
  useEffect(() => {
    FullScreenHelper.enableFullScreen();
  }, []);
  const closeFullScreenImage = () => {
    onClose && onClose();
    FullScreenHelper.disableFullScreen();
  };
  return (
    <Modal animationType="fade" transparent={true} visible={open}>
      <StyledFullScreenImageContainer>
        <StyledFullScreenImageHeader>
          <StyledFullScreenImageCloseButton onPress={closeFullScreenImage}>
            <StyledFullScreenImageCloseIcon name="close" />
          </StyledFullScreenImageCloseButton>
        </StyledFullScreenImageHeader>
        <StyledFullScreenImageImageContainer>
          <StyledFullScreenImage
            source={{
              uri: "https://res.cloudinary.com/geeteshpp/image/upload/v1644933320/0fdddf59-419f-4479-8658-1e6ab58bfc9f_62b34b08-0562-4d59-a61f-f7344c80cc9aRW20seconds_1_thumbnail_xth8dk.jpg",
            }}
          />
        </StyledFullScreenImageImageContainer>
      </StyledFullScreenImageContainer>
    </Modal>
  );
};
