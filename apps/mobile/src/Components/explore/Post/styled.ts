import styled from "styled-components/native";
import PagerView from "react-native-pager-view";
import Animated from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";
import { IImageAspectRatio, IVideoProperties } from "../Feed";
import { Dimensions } from "react-native";
import Video from "react-native-video";

const windowWidth = Dimensions.get("window").width;

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export const StyledAnimatedPagerView = styled(AnimatedPagerView)`
  width: 100%;
  height: 100px;
  flex: 1;
`;

export const StyledPostPageContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPostContainer = styled.View`
  height: ${windowWidth * 0.9 * (4 / 3)}px;
  width: ${windowWidth * 0.9}px;
  padding: 20px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledMediaContainer = styled.View<Partial<IVideoProperties>>`
  /* flex: 1; */
  width: ${windowWidth * 0.9}px;
  /* height: ${({ height, width }) =>
    windowWidth * 0.9 * ((height || 1) / (width || 1))}px; */
  height: ${windowWidth * 0.9 * (4 / 3)}px;
`;

export const StyledReactionsContainer = styled.View`
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
  width: ${windowWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 15px;
`;
export const StyledReactionsEmoji = styled.Text`
  font-size: 30px;
  text-align: center;
  flex: 1;
`;

export const StyledCaptionContainer = styled.View`
  padding: 15px 10px;
`;

export const StyledCaptionText = styled.Text`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 22px;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  font-weight: 600;
  opacity: 0.4;
`;

export const StyledMedia = styled.Image<IImageAspectRatio>`
  /* border-radius: 30px; */
  height: ${windowWidth * (4 / 3)}px;
  max-height: ${windowWidth * (4 / 3)}px;
  max-width: ${windowWidth}px;
  resize-mode: contain;
`;
