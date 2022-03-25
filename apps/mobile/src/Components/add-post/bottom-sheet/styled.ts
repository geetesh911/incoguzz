import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("window").width;
export const StyledAddPostBottomSheetGestureHeader = styled.View`
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  height: 20px;
`;

export const StyledAddPostBottomSheetHeaderContainer = styled.View`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  padding: 0 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledAddPostBottomSheetHeaderIconContainer = styled.Pressable`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  padding: 0 20px 10px;
  display: flex;
  align-items: center;
`;

export const StyledAddPostBottomSheetHeaderCloseIcon = styled(Icon)`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 25px;
`;

export const StyledAddPostBottomSheetHeading = styled.Text`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-family: ${({ theme }) => theme?.fontFamily?.primary}
  font-size: 22px;
  flex: 1;
`;

export const StyledAddPostBottomSheetContainer = styled.View`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
`;

export const StyledAddPostBottomSheetBodyContainer = styled.View`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledAddPostItemContainer = styled.Pressable`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  width: ${windowWidth / 4}px;
  height: ${windowWidth / 4}px;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledAddPostItemLabel = styled.Text`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-family: ${({ theme }) => theme?.fontFamily?.primary}
  font-size: 12px;
  padding: 5px 20px
`;
