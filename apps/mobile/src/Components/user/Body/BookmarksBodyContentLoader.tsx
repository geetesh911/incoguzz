import ContentLoader, { Rect } from "react-content-loader/native";
import React, { FC } from "react";
import { Dimensions } from "react-native";
import { useTheme } from "../../../styles/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const BookmarksBodyContentLoader: FC = () => {
  const theme = useTheme();

  const rectWidth = 150;
  const rectHeight = 150;
  const borderRadius = 15;
  return (
    <ContentLoader
      height={170}
      width={windowWidth - 20}
      speed={1}
      backgroundColor={theme?.objectBackgrounds?.primary}
      foregroundColor={theme?.objectBackgrounds?.contentLoader}
    >
      <Rect
        x="0"
        y="0"
        rx={borderRadius}
        width={rectWidth}
        height={rectHeight}
      />
      <Rect
        x="160"
        y="0"
        rx={borderRadius}
        width={rectWidth}
        height={rectHeight}
      />
      <Rect
        x="320"
        y="0"
        rx={borderRadius}
        width={rectWidth}
        height={rectHeight}
      />
    </ContentLoader>
  );
};
