import React, { FC } from "react";
import ActionSheet from "react-native-actions-sheet";
import { useAppSelector } from "../../../redux/hooks";
import { useTheme } from "../../../styles/theme";
import { AddPostBottomSheetHeader } from "./AddPostBottomSheetHeader";
import { AddPostItem } from "./AddPostItem";
import { IAddPostItems } from "./interfaces";
import {
  StyledAddPostBottomSheetContainer,
  StyledAddPostBottomSheetGestureHeader,
} from "./styled";

export const AddPostBottomSheet: FC = () => {
  const bottomSheetIds = useAppSelector(state => state.app.bottomSheetIds);
  const theme = useTheme();

  const items: IAddPostItems = [
    { iconName: "image-outline", label: "Image" },
    { iconName: "videocam-outline", label: "Video" },
    { iconName: "document-text-outline", label: "Text" },
    { iconName: "mic-outline", label: "Audio" },
  ];
  return (
    <ActionSheet
      containerStyle={{ backgroundColor: theme?.objectBackgrounds?.primary }}
      gestureEnabled
      bounceOnOpen
      closable
      CustomHeaderComponent={<StyledAddPostBottomSheetGestureHeader />}
      defaultOverlayOpacity={0.7}
      id={bottomSheetIds?.addPost}
    >
      <StyledAddPostBottomSheetContainer>
        <AddPostBottomSheetHeader />
        {items.map((item, index) => (
          <AddPostItem
            key={index}
            itemLabel={item.label}
            iconName={item.iconName as string}
            iconComponent={item.iconComponent}
          />
        ))}
      </StyledAddPostBottomSheetContainer>
    </ActionSheet>
  );
};
