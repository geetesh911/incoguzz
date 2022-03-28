import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Dimensions } from "react-native";
import { ImageCarouselIndicator } from "../../explore/Post/ImageCarouselIndicator";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const StyledFullScreenImageHeader = styled.View`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
`;

export const StyledFullScreenImageFooter = styled(ImageCarouselIndicator)`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 99;
`;

export const StyledFullScreenImageCloseButton = styled.Pressable`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFullScreenImageCloseIcon = styled(Icon)`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 30px;
`;
