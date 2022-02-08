import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import { useAppSelector } from "../../../redux/hooks";
import { themes } from "../../../styles/theme";

interface ILoadingIconProps {
  size?: number | "small" | "large";
  color?: string;
}

export const LoadingIcon: FC<ILoadingIconProps> = ({ size, color }) => {
  const themeMode = useAppSelector(state => state.theme.theme);

  return (
    <ActivityIndicator
      color={color || themes[themeMode].colors.primary}
      size={size || "large"}
    />
  );
};
