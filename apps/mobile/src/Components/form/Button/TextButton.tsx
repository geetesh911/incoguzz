import React, { FC } from "react";
import { useTheme } from "../../../styles/theme";
import { LoadingIcon } from "../../shared/Loading";
import { IButtonProps } from "./Button";
import { StyledTextButtonContainer, StyledTextButtonText } from "./styled";

export const TextButton: FC<IButtonProps> = ({ title, isLoading, onPress }) => {
  const theme = useTheme();
  return (
    <StyledTextButtonContainer onPress={onPress}>
      {isLoading ? (
        <LoadingIcon size={15} color={theme.colors.primary} />
      ) : (
        <StyledTextButtonText>{title}</StyledTextButtonText>
      )}
    </StyledTextButtonContainer>
  );
};
