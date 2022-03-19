import Animated from "react-native-reanimated";
import styled from "styled-components/native";

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
