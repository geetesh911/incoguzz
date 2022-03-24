import React, { FC } from "react";
import { Modal } from "react-native";
import { StyledModalContainer, StyledModalPostContainer } from "./styled";
import {
  FadeIn,
  FadeOut,
  Layout,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import { IPostComponentProps, PostComponent } from "../Post/PostComponent";

type IPostModalProps = IPostComponentProps & {
  open: boolean;
};

export const PostModal: FC<IPostModalProps> = ({
  open,
  url,
  thumbnailUrl,
  text,
  type,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={open}>
      <StyledModalContainer
        source={{ uri: thumbnailUrl }}
        entering={FadeIn}
        exiting={FadeOut}
        blurRadius={100}
        imageStyle={{ opacity: 0.7 }}
      >
        <StyledModalPostContainer
          entering={ZoomIn}
          exiting={ZoomOut}
          layout={Layout.delay(100)}
        >
          <PostComponent
            thumbnailUrl={thumbnailUrl}
            url={url as string}
            text={text as string}
            type={type}
          />
        </StyledModalPostContainer>
      </StyledModalContainer>
    </Modal>
  );
};
