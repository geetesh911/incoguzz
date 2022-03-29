import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { FeedCard, IMediaProperties } from "../../explore";
import { TapView } from "../../shared/Utility";

const windowWidth = Dimensions.get("window").width;

export const StyledOptionContainer = styled(Animated.View)`
  height: 82px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const StyledOptionText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  font-weight: bold;
  color: ${({ theme }) => theme?.textColors?.primary};
  opacity: 0.4;
  flex: 1;
`;

export const StyledBookmarksContainer = styled.View`
  height: 220px;
  width: ${windowWidth}px;
`;
export const StyledBookmarksScrollView = styled(Animated.ScrollView)``;

export const StyledBookmarksImageContainer = styled(TapView)`
  display: flex;
  height: 200px;
  width: 100%;
  flex: 1;
  padding: 0 10px 0 0;
  overflow: hidden;
`;

export const StyledBookmarksImage = styled.Image<IMediaProperties>`
  height: 200px;
  width: ${({ height, width }) => {
    const factor = 200 / height;
    return factor * width;
  }}px;
  resize-mode: contain;
  border-radius: 20px;
`;

export const StyledFeedCard = styled(FeedCard)<IMediaProperties>`
  height: 200px;
  width: ${({ height, width }) => {
    const factor = 200 / height;
    return factor * width;
  }}px;
  resize-mode: contain;
  border-radius: 20px;
`;
