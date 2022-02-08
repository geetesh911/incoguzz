import styled from "styled-components/native";
import { LogoIcon } from "../icons";

export const StyledAuthScreenContainer = styled.View`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const StyledHeaderContainer = styled.View`
  margin: 0 0 32px;
`;
export const StyledHeaderIcon = styled(LogoIcon)``;
export const StyledHeaderText = styled.Text`
  color: ${({ theme }) => theme.textColors.primary};
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 44px;
  text-align: center;
`;

export const StyledAuthFormContainer = styled.View`
  width: 100%;
`;

export const StyledAuthNavigationMessageContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const StyledAuthNavigationMessage = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  color: ${({ theme }) => theme.textColors.primary};
`;
