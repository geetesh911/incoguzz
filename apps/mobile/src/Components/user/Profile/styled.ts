import styled from "styled-components/native";
import { TapView } from "../../shared";

export const StyledProfileContainer = styled.View`
  padding: 0 10px;
`;

export const StyledEditDpContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledEditDpImageContainer = styled.Pressable`
  height: 80px;
  width: 80px;
`;
export const StyledEditDpImage = styled.Image`
  border-radius: 50px;
  height: 80px;
  width: 80px;
`;

export const StyledEditTextButton = styled(TapView)`
  margin-top: 10px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledEditButton = styled.View`
  height: 30px;
  width: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.objectBackgrounds?.primary};
`;

export const StyledEditProfileFormContainer = styled.View`
  margin-top: 20px;
`;
