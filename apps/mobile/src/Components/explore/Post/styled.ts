import styled from "styled-components/native";
import { LazyPagerView, PagerView } from "react-native-pager-view";
import Animated from "react-native-reanimated";
import { IImageAspectRatio, IMediaProperties } from "../Feed";
import { Dimensions, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const AnimatedLazyPagerView =
  Animated.createAnimatedComponent(LazyPagerView);
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
const AnimatedOverlay = Animated.createAnimatedComponent(Pressable);

export const StyledAnimatedPagerView = styled(AnimatedLazyPagerView)`
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

export const StyledPostContainer = styled.View<{ isFullScreen: boolean }>`
  height: ${({ isFullScreen }) =>
    isFullScreen ? windowWidth : windowWidth * 0.9 * (4 / 3)}px;
  width: ${({ isFullScreen }) =>
    isFullScreen ? "100%" : windowWidth * 0.9 + "px"};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* margin-top: 10px; */
`;

export const StyledMediaContainer = styled.View<Partial<IMediaProperties>>`
  width: 100%;
  height: ${({ isFullScreen }) =>
    isFullScreen ? windowWidth : windowWidth * 0.9 * (4 / 3)}px;
`;

export const StyledImageContainer = styled.Pressable<Partial<IMediaProperties>>`
  width: 100%;
  height: ${windowWidth * 0.9 * (4 / 3)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoadingContainer = styled.View`
  position: absolute;
`;

export const StyledReactionsContainer = styled.View`
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
  width: ${windowWidth}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px 30px;
`;

export const StyledReactionsEmoji = styled.Text`
  font-size: 30px;
  text-align: center;
  flex: 1;
`;

export const StyledReaction = styled.Pressable``;

export const StyledCaptionContainer = styled.Pressable`
  padding: 5px 10px;
`;

export const StyledCaptionText = styled.Text`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  font-weight: 600;
  opacity: 0.4;
`;

export const StyledPotraitMedia = styled.Image<IImageAspectRatio>`
  height: ${windowWidth * 0.9 * (4 / 3)}px;
  max-height: ${windowWidth * 0.9 * (4 / 3)}px;
  max-width: 100%;
  resize-mode: contain;
`;

export const StyledLandscapeMedia = styled.Image<IImageAspectRatio>`
  resize-mode: contain;
`;

export const StyledPostImageCarousel = styled.Image<IImageAspectRatio>`
  resize-mode: contain;
`;

export const StyledPostImageCarouselPagerView = styled(AnimatedPagerView)`
  height: ${windowWidth * 0.9 * (4 / 3)}px;
  width: ${windowWidth * 0.9}px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPostTextContainer = styled(LinearGradient)`
  padding: 25px;
  flex: 1;
  width: 100%;
`;

export const StyledPostTextScrollView = styled.ScrollView``;

export const StyledPostText = styled.Text`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-family: ${({ theme }) => theme?.fontFamily.primary};
  font-size: 18px;
  flex-shrink: 1;
  text-align: left;
`;

export const StyledCaptionModal = styled.Modal`
  height: 200px;
`;

export const StyledOverlayModalContainer = styled(AnimatedOverlay)`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.overlayBg};
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${windowHeight}px;
  width: ${windowWidth}px;
`;

export const StyledCaptionModalContainer = styled.View`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
`;
export const StyledCaptionModalScrollView = styled.ScrollView`
  z-index: 99;
  padding: 25px;
  max-height: 300px;
`;

export const StyledCaptionModalText = styled.Text`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-family: ${({ theme }) => theme?.fontFamily.primary};
  font-size: 18px;
`;

export const StyledPostActionsContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const StyledPostActionIconButton = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  margin: 10px 10px 0px;
`;

export const StyledPostActionTextButton = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 40px;
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  margin: 10px 10px 0px;
`;

export const StyledPostActionButtonText = styled.Text`
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  font-size: 16px;
`;

export const StyledImageCarouselContainer = styled.View`
  height: 20px;
  width: 100%;
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 99;
`;

export const StyledImageCarouselIndicatorContainer = styled.View`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const StyledImageCarouselIndicator = styled.View<{ active: boolean }>`
  height: ${({ active }) => (active ? 6 : 5)}px;
  width: ${({ active }) => (active ? 6 : 5)}px;
  margin: 0 2px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: ${({ theme }) => theme?.textColors?.primary};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

export const StyledBookmarkButton = styled.Pressable`
  position: absolute;
  right: 10px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
