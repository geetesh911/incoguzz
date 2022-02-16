import React, { FC } from "react";
import ActionSheet from "react-native-actions-sheet";
import { useAppSelector } from "../../../redux/hooks";
import { useTheme } from "../../../styles/theme";
import {
  ImageIcon,
  AudioIcon,
  TextIcon,
  VideoIcon,
  PollIcon,
  ClipIcon,
} from "../../icons";
import { AddPostBottomSheetHeader } from "./AddPostBottomSheetHeader";
import { AddPostItem } from "./AddPostItem";
import { IAddPostItems } from "./interfaces";
import {
  StyledAddPostBottomSheetBodyContainer,
  StyledAddPostBottomSheetContainer,
  StyledAddPostBottomSheetGestureHeader,
} from "./styled";

export const AddPostBottomSheet: FC = () => {
  const bottomSheetIds = useAppSelector(state => state.app.bottomSheetIds);
  const theme = useTheme();

  const iconHeight = 20;
  const iconWidth = 20;

  const items: IAddPostItems = [
    {
      iconComponent: <ImageIcon height={iconHeight} width={iconWidth} />,
      label: "Image",
    },
    {
      iconComponent: <VideoIcon height={iconHeight} width={iconWidth} />,
      label: "Video",
    },
    {
      iconComponent: <TextIcon height={iconHeight} width={iconWidth} />,
      label: "Text",
    },
    {
      iconComponent: <AudioIcon height={iconHeight} width={iconWidth} />,
      label: "Audio",
    },
    {
      iconComponent: <ClipIcon height={iconHeight} width={iconWidth} />,
      label: "Clip",
    },
    {
      iconComponent: <PollIcon height={iconHeight} width={iconWidth} />,
      label: "Poll",
    },
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
        <StyledAddPostBottomSheetBodyContainer>
          {items.map((item, index) => (
            <AddPostItem
              key={index}
              itemLabel={item.label}
              iconName={item.iconName as string}
              iconComponent={item.iconComponent}
            />
          ))}
        </StyledAddPostBottomSheetBodyContainer>
      </StyledAddPostBottomSheetContainer>
    </ActionSheet>
  );
};
