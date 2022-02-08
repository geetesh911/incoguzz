import React, { FC } from "react";
import { GestureResponderEvent } from "react-native";
import { DefaultTheme } from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import { themes } from "../../../styles/theme";
import { LoadingIcon } from "../../shared/Loading";
import { StyledButtonText, StyledButtonContainer } from "./styled";

export interface IButtonProps {
  title: string;
  color?: keyof DefaultTheme["colors"];
  isLoading?: boolean;
  onPress: (e?: GestureResponderEvent) => void;
}

export const Button: FC<IButtonProps> = ({
  title,
  color,
  isLoading,
  onPress,
}) => {
  const themeMode = useAppSelector(state => state.theme.theme);

  return (
    <StyledButtonContainer
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? themes[themeMode].hoverColors[color || "primary"]
            : themes[themeMode].colors[color || "primary"],
        },
      ]}
      onPress={onPress}
    >
      {isLoading ? (
        <LoadingIcon size={25} color={themes[themeMode].textColors.primary} />
      ) : (
        <StyledButtonText>{title}</StyledButtonText>
      )}
    </StyledButtonContainer>
  );
};
