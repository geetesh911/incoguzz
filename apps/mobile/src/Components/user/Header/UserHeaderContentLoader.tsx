import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import React, { FC } from "react";
import { Dimensions } from "react-native";
import { useTheme } from "../../../styles/theme";

const windowWidth = Dimensions.get("window").width;

export const UserHeaderContentLoader: FC = () => {
  const theme = useTheme();

  return (
    <ContentLoader
      height={106}
      width={windowWidth}
      speed={1}
      backgroundColor={theme?.objectBackgrounds?.primary}
      foregroundColor={theme?.objectBackgrounds?.contentLoader}
    >
      <Rect x="15" y="50" rx={2} width={windowWidth - 125} height={10} />
      <Rect x="15" y="71" rx={2} width={windowWidth - 150} height={10} />
      <Circle x="15" y="33" cx={windowWidth - 75} cy="30" r="30" />
    </ContentLoader>
  );
};
