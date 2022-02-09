import React, { FC } from "react";
import { View, Text } from "react-native";
import { useTheme } from "../../../styles/theme";
import { LoadingIcon } from "../../shared/Loading";
import { IButtonProps } from "./Button";
import {
  StyledIconButtonContainer,
  StyledIconButtonIconContainer,
  StyledIconButtonText,
  StyledIconButtonTextContainer,
} from "./styled";

interface IButtonWithIconProps extends IButtonProps {
  icon: JSX.Element;
}

export const ButtonWithIcon: FC<IButtonWithIconProps> = ({
  title,
  color,
  isLoading,
  icon,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <StyledIconButtonContainer
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? theme.hoverColors[color || "primary"]
            : theme.colors[color || "primary"],
        },
      ]}
      onPress={onPress}
    >
      <StyledIconButtonIconContainer>{icon}</StyledIconButtonIconContainer>
      <StyledIconButtonTextContainer>
        {isLoading ? (
          <LoadingIcon size={25} color={theme.textColors.primary} />
        ) : (
          <StyledIconButtonText>{title}</StyledIconButtonText>
        )}
      </StyledIconButtonTextContainer>
    </StyledIconButtonContainer>
  );
};

export default ButtonWithIcon;
