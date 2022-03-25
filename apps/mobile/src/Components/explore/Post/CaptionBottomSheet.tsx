import React, { FC } from "react";
import ActionSheet from "react-native-actions-sheet";
import { useAppSelector } from "../../../redux/hooks";
import { useTheme } from "../../../styles/theme";
import {
  BottomSheetHeader,
  StyledAddPostBottomSheetGestureHeader,
} from "../../add-post";
import {
  StyledCaptionModalContainer,
  StyledCaptionModalScrollView,
  StyledCaptionModalText,
} from "./styled";

interface ICaptionModalProps {
  text: string;
  postId: string;
}

export const CaptionBottomSheet: FC<ICaptionModalProps> = ({
  postId,
  text,
}) => {
  const bottomSheetIds = useAppSelector(state => state.app.bottomSheetIds);

  const theme = useTheme();
  return (
    <ActionSheet
      containerStyle={{ backgroundColor: theme?.objectBackgrounds?.primary }}
      gestureEnabled
      bounceOnOpen
      closable
      CustomHeaderComponent={<StyledAddPostBottomSheetGestureHeader />}
      defaultOverlayOpacity={0.7}
      extraScroll={10}
      id={`${bottomSheetIds?.caption}${postId}`}
    >
      <StyledCaptionModalContainer>
        <BottomSheetHeader
          label="Caption"
          bottomSheetId={`${bottomSheetIds?.caption}${postId}`}
        />
        <StyledCaptionModalScrollView>
          <StyledCaptionModalText>{text}</StyledCaptionModalText>
        </StyledCaptionModalScrollView>
      </StyledCaptionModalContainer>
    </ActionSheet>
  );
};
