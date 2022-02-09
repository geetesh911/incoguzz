import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "../../../styles/theme";

interface ILoadingIconProps {
  size?: number | "small" | "large";
  color?: string;
}

export const LoadingIcon: FC<ILoadingIconProps> = ({ size, color }) => {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={color || theme.colors.primary}
      size={size || "large"}
    />
  );
};
