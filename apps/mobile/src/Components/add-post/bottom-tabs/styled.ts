import { LazyPagerView } from "react-native-pager-view";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { WheelPicker } from "../../shared";

const AnimatedPagerView = Animated.createAnimatedComponent(LazyPagerView);

export const StyledPostImageCarouselPagerView = styled(AnimatedPagerView)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBottomTabContainer = styled.View`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  bottom: 5px;
  /* background-color: ${({ theme }) => theme.backgrounds.primary}; */
`;

export const StyledWheelPicker = styled(WheelPicker)`
  height: 100%;
`;

export const StyledWheelPickerItemContainer = styled.View<{
  first: boolean;
  last: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-right: ${({ last }) => (last ? 50 : 0)}px;
  border-top-left-radius: ${({ first }) => (first ? 25 : 0)}px;
  border-bottom-left-radius: ${({ first }) => (first ? 25 : 0)}px;
  border-top-right-radius: ${({ last }) => (last ? 25 : 0)}px;
  border-bottom-right-radius: ${({ last }) => (last ? 25 : 0)}px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  opacity: 0.85;
`;

export const StyledBottomTabItem = styled.Text<{
  active: boolean;
}>`
  text-align: center;
  color: ${({ theme, active }) =>
    active ? theme.textColors.primary : theme.textColors.inactive};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 16px;
`;
