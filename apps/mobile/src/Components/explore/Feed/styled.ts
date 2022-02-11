import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface IStyledFeedImageProps {
  height: number;
}
export const StyledFeedImage = styled.Image<IStyledFeedImageProps>`
  height: ${({ height }) => height}px;
  align-self: stretch;
  margin: 5px;
  border-radius: 15px;
`;

export const StyledModalContainer = styled(Animated.View)`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.overlay};
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${windowHeight}px;
  width: ${windowWidth}px;
  padding: 15px;
`;
export const StyledModalPost = styled(Animated.Image)<{
  aspectRatio: number;
}>`
  border-radius: 15px;
  height: ${({ aspectRatio }) => windowWidth * 0.9 * aspectRatio}px;
  min-width: ${windowWidth * 0.9}px;
  max-width: ${windowWidth * 0.9}px;
  background-color: ${({ theme }) => theme.textColors.primary};
`;

export const StyledSearchIcon = styled(Icon)`
  color: ${({ theme }) => theme?.commonConstants?.placeholderTextColor};
`;

export const StyledExploreHeaderContainer = styled.View``;

export const StyledExploreHeading = styled.Text`
  font-size: 35px;
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  color: ${({ theme }) => theme?.textColors?.primary};
`;
