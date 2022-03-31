import React, { FC } from "react";
import { useTheme } from "../../../styles/theme";
import { IIconInterface } from "../../icons";
import { StyledOptionContainer, StyledOptionText } from "./styled";
import {
  GestureEvent,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { StyleProp, ViewStyle } from "react-native";

export interface IOptionProps {
  label: string;
  Icon: React.ComponentType<IIconInterface>;
  body?: JSX.Element;
  style?: StyleProp<ViewStyle>;
}

export const Option: FC<IOptionProps> = ({ label, Icon, body, style }) => {
  const theme = useTheme();

  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler<
    GestureEvent<TapGestureHandlerEventPayload>
  >({
    onStart: () => (pressed.value = true),
    onEnd: () => (pressed.value = false),
    onFail: () => (pressed.value = false),
    onCancel: () => (pressed.value = false),
    onFinish: () => (pressed.value = false),
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(pressed.value ? 0.95 : 1) }],
  }));

  return (
    <>
      <TapGestureHandler onGestureEvent={eventHandler}>
        <StyledOptionContainer style={[animatedStyle, style]}>
          <StyledOptionText>{label}</StyledOptionText>
          <Icon color={theme?.colors?.primary} height={20} width={20} />
        </StyledOptionContainer>
      </TapGestureHandler>
      {body}
    </>
  );
};

export default Option;
