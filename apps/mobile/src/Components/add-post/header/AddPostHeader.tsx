import React, { FC } from "react";
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
  const theme = useTheme();
  return (
    <StyledHeaderContainer>
      <StyledHeaderCloseIcon name="close" />
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
