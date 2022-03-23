import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
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
}

export const PageHeader: FC<IPageHeaderProps> = ({ text }) => {
  const navigation = useNavigation<PostScreenNavigationProp>();
  const videoPlayerState = useAppSelector(state => state.app.videoPlayerState);

  const onPress = () => navigation.goBack();

  return (
    <>
      {!videoPlayerState?.isFullScreen && (
        <StyledPageHeader>
          <StyledBackIconContainer onPress={onPress}>
            <StyledBackIcon name="arrow-left" />
          </StyledBackIconContainer>
          <StyledPageText>{text}</StyledPageText>
        </StyledPageHeader>
      )}
    </>
  );
};
