import styled from "styled-components/native";
import { TapView } from "../../shared";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "../../form";

export const StyledAudioRecorderContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const StyledStartRecordButton = styled(TapView)<{ removeBg?: boolean }>`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  background-color: ${({ theme, removeBg }) =>
    removeBg ? "" : theme.colors.error};
`;

export const StyledStartRecordButtonIcon = styled(MaterialCommunityIcon)<{
  removeBg?: boolean;
}>`
  color: ${({ theme, removeBg }) =>
    theme.textColors[removeBg ? "primary" : "secondary"]};
  font-size: 30px;
`;

export const StyledRecordTimeText = styled.Text`
  color: ${({ theme }) => theme.textColors.primary};
  font-size: 50px;
  margin: 10px 0;
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

export const StyledRecordButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 100px;
`;

export const StyledSliderContainer = styled.View`
  width: 90%;
`;

export const StyledSliderText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.primary};
`;

export const StyledPlayerButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledPlayerContainer = styled.View`
  display: flex;
  margin-top: 100px;
  align-self: stretch;
  align-items: center;
`;

export const StyledFileSelectButton = styled(Button)`
  margin-top: 100px;
  width: auto;
  padding: 0 15px;
`;
