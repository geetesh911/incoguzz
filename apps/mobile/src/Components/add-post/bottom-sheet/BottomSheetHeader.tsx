import React, { FC } from "react";
import {
  StyledAddPostBottomSheetHeaderCloseIcon,
  StyledAddPostBottomSheetHeaderContainer,
  StyledAddPostBottomSheetHeaderIconContainer,
  StyledAddPostBottomSheetHeading,
} from "./styled";
import { SheetManager } from "react-native-actions-sheet";

interface IBottomSheetHeaderProps {
  bottomSheetId: string;
  label: string;
}

export const BottomSheetHeader: FC<IBottomSheetHeaderProps> = ({
  bottomSheetId,
  label,
}) => {
  return (
    <StyledAddPostBottomSheetHeaderContainer>
      <StyledAddPostBottomSheetHeading>{label}</StyledAddPostBottomSheetHeading>
      <StyledAddPostBottomSheetHeaderIconContainer
        onPress={() => SheetManager.hide(bottomSheetId)}
      >
        <StyledAddPostBottomSheetHeaderCloseIcon name="close" />
      </StyledAddPostBottomSheetHeaderIconContainer>
    </StyledAddPostBottomSheetHeaderContainer>
  );
};
