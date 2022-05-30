import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { CaptureButton } from "./CaptureButton";
import {
  CAPTURE_BUTTON_SIZE,
  CONTENT_SPACING,
} from "./constants/camera.constant";

const BUTTON_SIZE = 40;
const WINDOW_WIDTH = Dimensions.get("window").width;

export const StyledCameraContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;

export const StyledCaptureButton = styled(CaptureButton)`
  position: absolute;
  align-self: center;
  bottom: 30px;
`;

export const StyledRightButtonRow = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;

  /* padding-right: 10px;
  padding-top: 10px; */
`;

export const StyledControlButton = styled.Pressable`
  margin-bottom: ${CONTENT_SPACING}px;
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  border-radius: ${BUTTON_SIZE / 2}px;
  background-color: rgba(140, 140, 140, 0.3);
  justify-content: center;
  align-items: center;
`;

export const StyledFpsText = styled.Text`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 11px;
  font-weight: bold;
  text-align: center;
`;

export const StyledMediaNavigator = styled.Pressable`
  border-radius: ${40 / 2}px;
  position: absolute;
  bottom: 50px;
  left: ${WINDOW_WIDTH / 2 - CAPTURE_BUTTON_SIZE - 10}px;
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
`;
