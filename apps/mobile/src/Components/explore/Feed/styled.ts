import { Dimensions, ImageBackground } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export interface IImageAspectRatio {
  aspectRatio: number;
}
export interface IMediaProperties {
  height: number;
  width: number;
}
interface IStyledFeedImageProps {
  height: number;
}
export const StyledFeedImageContainer = styled.View<IStyledFeedImageProps>`
  height: ${({ height }) => height}px;
  align-self: stretch;
  margin: 5px;
  border-radius: 15px;
  overflow: hidden;
`;

export const StyledFeedImage = styled.Image<IStyledFeedImageProps>`
  height: 100%;
  align-self: stretch;
  /* margin: 5px; */
  /* border-radius: 15px; */
`;

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

export const StyledModalContainer = styled(AnimatedImageBackground)`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.overlayBg};
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${windowHeight}px;
  width: ${windowWidth}px;
  padding: 15px;
`;
export const StyledModalPost = styled(Animated.Image)<IImageAspectRatio>`
  /* border-radius: 15px; */
  height: ${({ aspectRatio }) => windowWidth * 0.9 * aspectRatio}px;
  min-width: ${windowWidth * 0.9}px;
  max-width: ${windowWidth * 0.9}px;
  background-color: ${({ theme }) => theme.textColors.primary};
`;

export const StyledModalPostContainer = styled(Animated.View)`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  width: ${windowWidth * 0.9}px;
  height: ${windowWidth * 0.9 * (4 / 3)}px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  /* z-index: 99; */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const StyledPostIcon = styled.View`
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;
