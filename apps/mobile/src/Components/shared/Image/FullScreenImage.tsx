import React, { FC } from "react";
import { Modal, Text } from "react-native";
import {
  StyledFullScreenImageCloseButton,
  StyledFullScreenImageCloseIcon,
  StyledFullScreenImageFooter,
  StyledFullScreenImageHeader,
} from "./styled";
import ImageViewer, {
  ImageViewerPropsDefine,
} from "react-native-image-zoom-viewer";

interface IFullScreenImageProps {
  open: boolean;
  onClose?: () => void;
  images: ImageViewerPropsDefine["imageUrls"];
  index?: ImageViewerPropsDefine["index"];
}

export const FullScreenImage: FC<IFullScreenImageProps> = ({
  open,
  onClose,
  images,
  index,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={open}>
      <ImageViewer
        imageUrls={images}
        onSwipeDown={onClose}
        onCancel={onClose}
        enableSwipeDown
        renderHeader={() => (
          <StyledFullScreenImageHeader>
            <StyledFullScreenImageCloseButton onPress={onClose}>
              <StyledFullScreenImageCloseIcon name="close" />
            </StyledFullScreenImageCloseButton>
          </StyledFullScreenImageHeader>
        )}
        renderIndicator={() => <></>}
        renderFooter={currentIndex => (
          <StyledFullScreenImageFooter
            totalImages={images.length}
            activeIndex={currentIndex}
          />
        )}
        index={index}
      />
    </Modal>
  );
};
