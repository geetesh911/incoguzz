import styled from "styled-components/native";

export const StyledUserHeaderContainer = styled.View`
  padding: 30px 15px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledUserDpContainer = styled.Pressable`
  height: 60px;
  width: 60px;
`;
export const StyledUserDp = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 50px;
`;

export const StyledUserDetailsContainer = styled.View`
  margin-right: 15px;
  flex: 1;
`;

export const StyledUserName = styled.Text`
  font-size: 35px;
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  color: ${({ theme }) => theme?.textColors?.primary};
`;

export const StyledUserTextButton = styled.Pressable``;

export const StyledUserTextButtonText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  color: ${({ theme }) => theme?.colors?.primary};
`;
