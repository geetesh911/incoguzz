import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const StyledModalContainer = styled(Animated.View)`
  background-color: ${({ theme }) => theme.objectBackgrounds.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${windowHeight}px;
  width: ${windowWidth}px;
`;
export const StyledModalPost = styled(Animated.View)`
  height: ${30}px;
  width: ${30}px;
  background-color: ${({ theme }) => theme.textColors.primary};
  /* flex: 1; */
  justify-content: center;
  align-items: center;
`;
