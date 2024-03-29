import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

export const StyledHeaderContainer = styled.View`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 40px;
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

export const StyledHeaderForwardButton = styled.Pressable``;

export const StyledHeaderForwardIcon = styled(Icon)<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme?.colors?.inactive : theme?.colors?.primary};
  font-size: 30px;
`;
