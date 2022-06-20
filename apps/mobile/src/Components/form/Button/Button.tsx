import React, { FC } from "react";
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
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
  color?: keyof DefaultTheme["hoverColors"] | keyof DefaultTheme["colors"];
  isLoading?: boolean;
  onPress: (e?: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

export const Button: FC<IButtonProps> = ({
  title,
  color,
  isLoading,
  onPress,
  style,
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
        ? theme.hoverColors[
            (color as keyof DefaultTheme["hoverColors"]) || "primary"
          ]
        : theme.colors[(color as keyof DefaultTheme["colors"]) || "primary"],
      transform: [{ scale: withSpring(pressed.value ? 0.95 : 1) }],
    };
  });

  return (
    <StyledButtonContainer
      customAnimatedStyle={animatedStyle}
      customEventHandler={eventHandler}
      onPress={onPress}
      style={style}
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
