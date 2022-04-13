import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { PostScreenNavigationProp } from "../../../Navigation";
import { useAppSelector } from "../../../redux/hooks";
import {
  StyledBackIcon,
  StyledBackIconContainer,
  StyledPageHeader,
  StyledPageText,
} from "./styled";

interface IPageHeaderProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  onBack?: () => void;
}

export const PageHeader: FC<IPageHeaderProps> = ({ text, style, onBack }) => {
  const navigation = useNavigation<PostScreenNavigationProp>();
  const videoPlayerState = useAppSelector(state => state.app.videoPlayerState);

  const onPress = () => (onBack ? onBack() : navigation.goBack());

  return (
    <>
      {!videoPlayerState?.isFullScreen && (
        <StyledPageHeader style={style}>
          <StyledBackIconContainer onPress={onPress}>
            <StyledBackIcon name="arrow-left" />
          </StyledBackIconContainer>
          <StyledPageText>{text}</StyledPageText>
        </StyledPageHeader>
      )}
    </>
  );
};
