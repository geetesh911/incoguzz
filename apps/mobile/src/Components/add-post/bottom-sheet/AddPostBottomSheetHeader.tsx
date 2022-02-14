import React, { FC } from "react";
import {
  StyledAddPostBottomSheetHeaderCloseIcon,
  StyledAddPostBottomSheetHeaderContainer,
  StyledAddPostBottomSheetHeaderIconContainer,
  StyledAddPostBottomSheetHeading,
} from "./styled";
import { SheetManager } from "react-native-actions-sheet";
import { useAppSelector } from "../../../redux/hooks";

export const AddPostBottomSheetHeader: FC = () => {
  const bottomSheetIds = useAppSelector(state => state.app.bottomSheetIds);

  return (
    <StyledAddPostBottomSheetHeaderContainer>
      <StyledAddPostBottomSheetHeading>Create</StyledAddPostBottomSheetHeading>
      <StyledAddPostBottomSheetHeaderIconContainer
        onPress={() => SheetManager.hide(bottomSheetIds?.addPost)}
      >
        <StyledAddPostBottomSheetHeaderCloseIcon name="close" />
      </StyledAddPostBottomSheetHeaderIconContainer>
    </StyledAddPostBottomSheetHeaderContainer>
  );
};
