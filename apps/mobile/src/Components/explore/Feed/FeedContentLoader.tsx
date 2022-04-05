import ContentLoader, { Rect } from "react-content-loader/native";
import React, { FC } from "react";
import { Dimensions } from "react-native";
import { useTheme } from "../../../styles/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const FeedContentLoader: FC = () => {
  const theme = useTheme();

  const rectWidth = (windowWidth - 30) / 2;
  return (
    <ContentLoader
      height={windowHeight}
      width={windowWidth}
      speed={1}
      backgroundColor={theme?.objectBackgrounds?.primary}
      foregroundColor={theme?.objectBackgrounds?.contentLoader}
    >
      <Rect x="0" y="0" rx="15" width={rectWidth} height="140" />
      <Rect x="0" y="150" rx="15" width={rectWidth} height="140" />
      <Rect x="0" y="300" rx="15" width={rectWidth} height="260" />
      <Rect x={rectWidth + 10} y="0" rx="15" width={rectWidth} height="260" />
      <Rect x={rectWidth + 10} y="270" rx="15" width={rectWidth} height="140" />
      <Rect x={rectWidth + 10} y="420" rx="15" width={rectWidth} height="140" />
    </ContentLoader>
  );
};
