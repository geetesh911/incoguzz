import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";

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

export const StyledAddPostItemContainer = styled.Pressable`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const StyledAddPostItemLabel = styled.Text`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-family: ${({ theme }) => theme?.fontFamily?.primary}
  font-size: 18px;
  padding: 0 20px
`;
