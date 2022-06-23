import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Pressable } from "react-native";
import { useTheme } from "../../../styles/theme";
import { LoadingIcon } from "../../shared";
import {
  StyledHeaderCloseIcon,
  StyledHeaderContainer,
  StyledHeaderForwardButton,
  StyledHeaderForwardIcon,
  StyledHeaderText,
} from "./styled";

interface IAddPostHeaderProps {
  onSubmit: () => void;
  loading?: boolean;
}

export const AddPostHeader: FC<IAddPostHeaderProps> = ({
  onSubmit,
  loading,
}) => {
  const navigation = useNavigation();

  const theme = useTheme();
  return (
    <StyledHeaderContainer>
      <Pressable onPress={() => navigation.goBack()}>
        <StyledHeaderCloseIcon name="close" />
      </Pressable>
      <StyledHeaderText>New Post</StyledHeaderText>
      {loading ? (
        <LoadingIcon size={25} color={theme.textColors.primary} />
      ) : (
        <StyledHeaderForwardButton onPress={onSubmit}>
          <StyledHeaderForwardIcon name="arrow-forward" />
        </StyledHeaderForwardButton>
      )}
    </StyledHeaderContainer>
  );
};
