import { LazyPagerView } from "react-native-pager-view";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const AnimatedPagerView = Animated.createAnimatedComponent(LazyPagerView);

export const StyledPostImageCarouselPagerView = styled(AnimatedPagerView)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBottomTabContainer = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;

export const StyledBottomTabItem = styled.Text<{
  active: boolean;
  width: number;
}>`
  text-align: center;
  width: ${({ width }) => width}%;
  color: ${({ theme, active }) =>
    active ? theme.textColors.primary : theme.textColors.inactive};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 16px;
`;
