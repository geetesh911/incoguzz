import React, { FC } from "react";
import { StyledCaptionContainer, StyledCaptionText } from "./styled";
import { CaptionBottomSheet } from "./CaptionBottomSheet";
import { SheetManager } from "react-native-actions-sheet";
import { useAppSelector } from "../../../redux/hooks";

interface ICaptionProps {
  caption: string;
  postId: string;
}

export const Caption: FC<ICaptionProps> = ({ caption, postId }) => {
  const bottomSheetIds = useAppSelector(state => state.app.bottomSheetIds);

  return (
    <>
      <StyledCaptionContainer
        onPress={() =>
          caption && SheetManager.show(`${bottomSheetIds?.caption}${postId}`)
        }
      >
        <StyledCaptionText numberOfLines={2} ellipsizeMode="tail">
          {caption}
        </StyledCaptionText>
      </StyledCaptionContainer>
      <CaptionBottomSheet text={caption} postId={postId} />
    </>
  );
};
