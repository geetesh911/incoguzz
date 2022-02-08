import styled, { DefaultTheme } from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface StyledInputProps {
  focused: boolean;
  error: boolean;
}

const inputConstants = {
  fontSize: "15px",
  height: "50px",
  padding: "12px 12px 12px 20px",
};

const getBorder = (
  theme: DefaultTheme,
  { focused, error }: Partial<StyledInputProps>,
) => {
  if (error) return theme?.colors?.error;
  if (focused) return theme?.colors?.primary;
  else return "none";
};

export const StyledInput = styled.TextInput<StyledInputProps>`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  border: ${({ theme, focused, error }) =>
    getBorder(theme, { focused, error })};
  border-radius: ${({ theme }) => theme?.commonConstants?.borderRadius};
  height: ${inputConstants.height};
  padding: ${inputConstants.padding};
  color: ${({ theme }) => theme?.textColors?.primary};
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  font-size: ${inputConstants.fontSize};
`;

export const StyledInputUpperContainer = styled.View`
  margin: 3px 0;
`;

export const StyledInputInnerContainer = styled.View``;

export const StyledPasswordInput = styled.TextInput`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  border-radius: ${({ theme }) => theme?.commonConstants?.borderRadius};
  height: ${inputConstants.height};
  padding: ${inputConstants.padding};
  color: ${({ theme }) => theme?.textColors?.primary};
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  font-size: ${inputConstants.fontSize};
  width: 88%;
`;

export const StyledPasswordInputUpperContainer = styled.View``;

export const StyledPasswordInputInnerContainer = styled.View<StyledInputProps>`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  border: ${({ theme, focused, error }) =>
    getBorder(theme, { focused, error })};
  border-radius: ${({ theme }) => theme?.commonConstants?.borderRadius};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
`;

export const PasswordIcon = styled(Icon)`
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
`;

export const ErrorContainer = styled.View`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme?.colors?.error};
  height: 19px;
  /* text-transform: capitalize; */
  font-family: Inter-Medium;
  font-size: 12px;
`;

export const ErrorIcon = styled(MIcon)`
  color: ${({ theme }) => theme?.colors?.error};
  margin-right: 10px;
`;
