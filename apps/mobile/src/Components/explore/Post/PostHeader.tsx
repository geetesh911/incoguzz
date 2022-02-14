import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { PostScreenNavigationProp } from "../../../Navigation";
import {
  StyledBackIcon,
  StyledBackIconContainer,
  StyledPostHeader,
  StyledPostText,
} from "./styled";

export const PostHeader: FC = () => {
  const navigation = useNavigation<PostScreenNavigationProp>();

  const onPress = () => navigation.goBack();

  return (
    <StyledPostHeader>
      <StyledBackIconContainer onPress={onPress}>
        <StyledBackIcon name="arrow-left" />
      </StyledBackIconContainer>
      <StyledPostText>Explore</StyledPostText>
    </StyledPostHeader>
  );
};
