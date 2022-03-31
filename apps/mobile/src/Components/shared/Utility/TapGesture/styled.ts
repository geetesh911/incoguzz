import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const StyledTapContainer = styled(Animated.View)`
  height: 100%;
  width: 100%;
`;

export const StyledTapOverlay = styled(Animated.View)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
  opacity: 0.2;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;
