import React, { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { themes } from "../../../styles/theme";
import { LoadingIcon } from "../../shared/Loading";
import { IButtonProps } from "./Button";
import { StyledTextButtonContainer, StyledTextButtonText } from "./styled";

export const TextButton: FC<IButtonProps> = ({ title, isLoading, onPress }) => {
  const themeMode = useAppSelector(state => state.theme.theme);

  return (
    <StyledTextButtonContainer onPress={onPress}>
      {isLoading ? (
        <LoadingIcon size={15} color={themes[themeMode].colors.primary} />
      ) : (
        <StyledTextButtonText>{title}</StyledTextButtonText>
      )}
    </StyledTextButtonContainer>
  );
};
