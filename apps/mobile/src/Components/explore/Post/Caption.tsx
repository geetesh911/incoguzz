import React, { FC, useState } from "react";
import { StyledCaptionContainer, StyledCaptionText } from "./styled";
import { CaptionModal } from "./CaptionModal";

interface ICaptionProps {
  caption: string;
}

export const Caption: FC<ICaptionProps> = ({ caption }) => {
  const [isCaptionModalOpen, setIsCaptionModalOpen] = useState<boolean>(false);

  return (
    <>
      <StyledCaptionContainer
        onPress={() => caption && setIsCaptionModalOpen(true)}
      >
        <StyledCaptionText numberOfLines={2} ellipsizeMode="tail">
          {caption}
        </StyledCaptionText>
      </StyledCaptionContainer>
      <CaptionModal
        open={isCaptionModalOpen}
        text={caption}
        handleClose={() => setIsCaptionModalOpen(false)}
      />
    </>
  );
};
