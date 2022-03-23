import LinearGradient from "react-native-linear-gradient";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { DoubleTap } from "../Utility/DoubleTap/DoubleTap";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const StyledVideoPlayerContainer = styled.Pressable`
  flex: 1;
`;

export const StyledVideoPlayerControlsContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: space-between;
`;

export const StyledAudioPlayerControlsContainer = styled(
  AnimatedLinearGradient,
)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* flex-direction: row; */
`;

export const StyledSoundButtonContainer = styled.Pressable`
  position: absolute;
  bottom: 25px;
  right: 25px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  height: 30px;
  width: 30px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPlaybackRateButtonContainer = styled.Pressable`
  position: absolute;
  bottom: 25px;
  left: 25px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  height: 30px;
  width: 30px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFullScreenButtonContainer = styled.Pressable`
  position: absolute;
  top: 15px;
  right: 15px;
  height: 50px;
  width: 50px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPlayButtonContainer = styled.Pressable`
  height: 20px;
  width: 20px;
  /* background-color: ${({ theme }) => theme.backgrounds.primary}; */
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70px;
  border-bottom-left-radius: 70px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledForButtonContainer = styled.View`
  height: 70px;
  width: 70px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  /* background-color: rgba(0, 255, 0, 0.5); */
`;
export const StyledBackButtonContainer = styled.View`
  height: 70px;
  width: 70px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: rgba(255, 255, 0, 0.5); */
`;

export const StyledPlaybackText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.textColors.primary};
`;

export const StyledAudioPlayerPlayControlsContainer = styled.View`
  position: absolute;
  bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const StyledProgressBarContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  z-index: 99;
  justify-content: space-between;
`;

export const StyledProgressBarTimeContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
`;

export const StyledSliderContainer = styled.View`
  flex: 1;
`;

export const StyledProgressBarLeftTimeText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.textColors.secondary};
`;

export const StyledProgressBarRightTimeText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 10px;
  /* padding-right: 10px; */
  color: ${({ theme }) => theme.textColors.secondary};
`;

export const StyledForBackContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  z-index: 999;
`;

export const StyledLeftDoubleTap = styled(DoubleTap)`
  /* background-color: rgba(255, 0, 0, 0.5); */
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
`;
export const StyledRightDoubleTap = styled(DoubleTap)`
  background-color: rgba(255, 255, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 9;
`;

export const StyledVideoLoaderContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  top: 43%;
  left: 43%;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  height: 50px;
  width: 50px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorTextContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  top: 43%;
  left: 0%;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  height: 50px;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorText = styled.Text`
  font-size: ${({ theme }) => theme?.fontFamily?.primary};
  font-size: 14px;
  color: ${({ theme }) => theme?.textColors?.primary};
`;

export const StyledFullScreenVideoPlayer = styled.View`
  height: 100%;
  width: 100%;
`;
