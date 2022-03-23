import React, { FC } from "react";
import {
  StyledCaptionModal,
  StyledCaptionModalContainer,
  StyledCaptionModalScrollView,
  StyledCaptionModalText,
  StyledOverlayModalContainer,
} from "./styled";

interface ICaptionModalProps {
  open: boolean;
  text: string;
  handleClose: () => void;
}

export const CaptionModal: FC<ICaptionModalProps> = ({
  open,
  text,
  handleClose,
}) => {
  return (
    <StyledCaptionModal animationType="fade" transparent={true} visible={open}>
      <StyledOverlayModalContainer onPress={handleClose}>
        <StyledCaptionModalContainer>
          <StyledCaptionModalScrollView>
            <StyledCaptionModalText>{text}</StyledCaptionModalText>
          </StyledCaptionModalScrollView>
        </StyledCaptionModalContainer>
      </StyledOverlayModalContainer>
    </StyledCaptionModal>
  );
};
