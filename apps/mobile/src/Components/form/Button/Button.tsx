import React, { FC } from "react";
import { GestureResponderEvent } from "react-native";
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
import { DefaultTheme } from "styled-components";
import { useTheme } from "../../../styles/theme";
import { LoadingIcon } from "../../shared/Loading";
import { StyledButtonText, StyledButtonContainer } from "./styled";

export interface IButtonProps {
  title: string;
  color?: keyof DefaultTheme["colors"];
  isLoading?: boolean;
  onPress: (e?: GestureResponderEvent) => void;
}

export const Button: FC<IButtonProps> = ({
  title,
  color,
  isLoading,
  onPress,
}) => {
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

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value
        ? theme.hoverColors[color || "primary"]
        : theme.colors[color || "primary"],
      transform: [{ scale: withSpring(pressed.value ? 0.95 : 1) }],
    };
  });

  return (
    <StyledButtonContainer
      customAnimatedStyle={animatedStyle}
      customEventHandler={eventHandler}
      onPress={onPress}
    >
      <>
        {isLoading ? (
          <LoadingIcon size={25} color={theme.textColors.primary} />
        ) : (
          <StyledButtonText>{title}</StyledButtonText>
        )}
      </>
    </StyledButtonContainer>
  );
};
