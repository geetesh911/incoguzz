import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ScreenHeader } from "../shared";
import { StyledExploreHeaderContainer } from "./Feed/styled";

interface IExploreHeaderProps {
  style?: StyleProp<ViewStyle>;
}

export const ExploreHeader: FC<IExploreHeaderProps> = ({ style }) => {
  return (
    <StyledExploreHeaderContainer style={style}>
      <ScreenHeader heading="Explore" />
    </StyledExploreHeaderContainer>
  );
};
