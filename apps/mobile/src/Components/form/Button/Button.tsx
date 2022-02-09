import React, { FC } from "react";
import { GestureResponderEvent } from "react-native";
import { DefaultTheme } from "styled-components";
import { useTheme } from "../../../styles/theme";
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
  const theme = useTheme();
  return (
    <StyledButtonContainer
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? theme.hoverColors[color || "primary"]
            : theme.colors[color || "primary"],
        },
      ]}
      onPress={onPress}
    >
      {isLoading ? (
        <LoadingIcon size={25} color={theme.textColors.primary} />
      ) : (
        <StyledButtonText>{title}</StyledButtonText>
      )}
    </StyledButtonContainer>
  );
};
