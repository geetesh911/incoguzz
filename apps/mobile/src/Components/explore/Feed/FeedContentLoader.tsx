import ContentLoader, { Rect } from "react-content-loader/native";
import React from "react";
import { Dimensions } from "react-native";
import { useTheme } from "../../../styles/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const FeedContentLoader = () => {
  const theme = useTheme();

  const rectWidth = (windowWidth - 30) / 2;
  return (
    <ContentLoader
      height={windowHeight - 235}
      width={windowWidth}
      speed={1}
      backgroundColor={theme?.objectBackgrounds?.primary}
      foregroundColor={theme?.objectBackgrounds?.contentLoader}
    >
      <Rect x="0" y="0" rx="15" width={rectWidth} height="150" />
      <Rect x="0" y="160" rx="15" width={rectWidth} height="150" />
      <Rect x="0" y="320" rx="15" width={rectWidth} height="280" />
      <Rect x={rectWidth + 10} y="0" rx="15" width={rectWidth} height="280" />
      <Rect x={rectWidth + 10} y="290" rx="15" width={rectWidth} height="150" />
      <Rect x={rectWidth + 10} y="450" rx="15" width={rectWidth} height="150" />
    </ContentLoader>
  );
};

export default FeedContentLoader;
