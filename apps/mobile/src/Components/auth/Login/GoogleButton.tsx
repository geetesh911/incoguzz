import React, { FC } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "../../../styles/theme";
import { IButtonProps } from "../../form";
import ButtonWithIcon from "../../form/Button/ButtonWithIcon";

type IGoogleButtonProps = Pick<IButtonProps, "isLoading" | "onPress">;

export const GoogleButton: FC<IGoogleButtonProps> = ({
  isLoading,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <ButtonWithIcon
      onPress={onPress}
      title="Sign in with Google"
      isLoading={isLoading}
      color={"secondary"}
      icon={<Icon name="google" size={20} color={theme.textColors.primary} />}
    />
  );
};
