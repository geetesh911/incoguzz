import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const WINDOW_HEIGHT = Dimensions.get("window").height;

export const StyledDropDownContainer = styled.Pressable`
  height: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;

export const StyledDropDownIcon = styled(MaterialIcon)`
  font-size: 30px;
  color: ${({ theme }) => theme.textColors.primary};
`;

export const StyledDropDownValue = styled.Text`
  color: ${({ theme }) => theme.textColors.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 18px;
`;

export const StyledOptionsContainer = styled.View`
  height: ${WINDOW_HEIGHT * 0.5}px;
  border-radius: 20px
  width: 90%;
  background-color: ${({ theme }) => theme.objectBackgrounds.primary};
`;

export const StyledOptionsModalContainer = styled.Pressable`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.objectBackgrounds.overlayBg};
`;

export const StyledOptionsHeader = styled.View`
  height: 50px;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const StyledOptionsCloseButton = styled.Pressable`
  height: 100%;
`;

export const StyledOptionsCloseIcon = styled(Icon)`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 30px;
`;

export const StyledOptionsHeaderText = styled.Text`
  color: ${({ theme }) => theme.textColors.primary};
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 18px;
  flex: 1;
`;

export const StyledOptionsList = styled.ScrollView`
  flex: 1;
`;

export const StyledOptionContainer = styled.Pressable`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
`;

export const StyledOptionText = styled.Text`
  color: ${({ theme }) => theme.textColors.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 18px;
`;
