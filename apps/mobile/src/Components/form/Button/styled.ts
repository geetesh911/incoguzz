import styled from "styled-components/native";

export const StyledButtonContainer = styled.Pressable`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background-color: ${({ theme }) => theme?.colors?.primary};
  border-radius: ${({ theme }) => theme?.commonConstants?.borderRadius};
`;
export const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 18px;
  text-transform: capitalize;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
`;

export const StyledTextButtonContainer = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;
export const StyledTextButtonText = styled.Text`
  color: ${({ theme }) => theme?.colors?.primary};
  font-size: 16px;
  text-transform: capitalize;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
`;
