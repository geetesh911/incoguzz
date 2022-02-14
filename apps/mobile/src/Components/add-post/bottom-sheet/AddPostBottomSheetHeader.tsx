import React, { FC } from "react";
import {
  StyledAddPostBottomSheetHeaderCloseIcon,
  StyledAddPostBottomSheetHeaderContainer,
  StyledAddPostBottomSheetHeaderIconContainer,
  StyledAddPostBottomSheetHeading,
} from "./styled";
import { SheetManager } from "react-native-actions-sheet";

export const AddPostBottomSheetHeader: FC = () => {
  return (
    <StyledAddPostBottomSheetHeaderContainer>
      <StyledAddPostBottomSheetHeading>Create</StyledAddPostBottomSheetHeading>
      <StyledAddPostBottomSheetHeaderIconContainer
        onPress={() => SheetManager.hide("add_post_bottom_sheet")}
      >
        <StyledAddPostBottomSheetHeaderCloseIcon name="close" />
      </StyledAddPostBottomSheetHeaderIconContainer>
    </StyledAddPostBottomSheetHeaderContainer>
  );
};
