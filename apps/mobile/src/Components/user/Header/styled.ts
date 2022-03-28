import styled from "styled-components/native";
import { TapView } from "../../shared/Utility";

export const StyledUserHeaderContainer = styled.View`
  padding: 30px 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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

export const StyledUserTextButton = styled(TapView)`
  height: 25px;
`;

export const StyledUserTextButtonText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  color: ${({ theme }) => theme?.colors?.primary};
`;
