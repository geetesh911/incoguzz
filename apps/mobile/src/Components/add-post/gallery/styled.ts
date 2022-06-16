import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { DropDown } from "../../form";
import { Dimensions } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated from "react-native-reanimated";
import { PagerView } from "react-native-pager-view";

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const WINDOW_WIDTH = Dimensions.get("window").width;

export const StyledGalleryContainer = styled.View`
  flex: 1;
`;

export const StyledHeaderContainer = styled.View`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 7%;
`;

export const StyledHeaderCloseIcon = styled(Icon)`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 30px;
`;

export const StyledHeaderText = styled.Text`
  color: ${({ theme }) => theme.textColors.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 18px;
  flex: 1;
  padding: 0 15px;
`;

export const StyledHeaderForwardIcon = styled(Icon)`
  color: ${({ theme }) => theme?.colors?.primary};
  font-size: 30px;
`;

export const StyledImagesContainer = styled.View`
  height: 45%;
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;

export const StyledToolbarContainer = styled.View`
  height: 7%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const StyledIconButton = styled.Pressable<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 35px;
  width: 35px;
  border-radius: 25px;
  margin: 0 10px 0 5px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : "rgba(140, 140, 140, 0.6)"};
`;

export const StyledDropDown = styled(DropDown)`
  flex: 1;
`;

export const StyledImage = styled.Image`
  height: ${WINDOW_WIDTH / 4}px;
  border-color: ${({ theme }) => theme.backgrounds.primary};
`;

export const StyledImageContainer = styled.View`
  background-color: ${({ theme }) => theme.objectBackgrounds.primary};
`;

export const StyledBouncyCheckbox = styled(BouncyCheckbox)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 20px;
`;

export const StyledGalleryImageCarouselPagerView = styled(AnimatedPagerView)`
  flex: 1;
`;

export const StyledBigImage = styled.Image`
  height: 100%;
  width: 100%;
`;
