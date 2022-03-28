import React, { FC } from "react";
import {
  AnimatedStyleProp,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  GestureEvent,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
  TapGestureHandlerProps,
} from "react-native-gesture-handler";
import { StyledTapContainer } from "./styled";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
import { RequireAllOrNone } from "type-fest";

type ITapViewProps = RequireAllOrNone<
  {
    tapGestureHandlerProps?: Partial<TapGestureHandlerProps>;
    style?: StyleProp<ViewStyle>;
    customAnimatedStyle?: AnimatedStyleProp<ViewStyle | ImageStyle | TextStyle>;
    customEventHandler?: (
      event: GestureEvent<TapGestureHandlerEventPayload>,
    ) => void;
    onPress?: () => void;
  },
  "customAnimatedStyle" | "customEventHandler"
>;

export const TapView: FC<ITapViewProps> = ({
  children,
  style,
  customAnimatedStyle,
  customEventHandler,
  onPress,
  tapGestureHandlerProps,
}) => {
  const pressed = useSharedValue(false);

  const eventHandler =
    customEventHandler ||
    useAnimatedGestureHandler<GestureEvent<TapGestureHandlerEventPayload>>({
      onStart: () => (pressed.value = true),
      onEnd: () => (pressed.value = false),
      onFail: () => (pressed.value = false),
      onCancel: () => (pressed.value = false),
      onFinish: () => (pressed.value = false),
    });

  const animatedStyle =
    customAnimatedStyle ||
    useAnimatedStyle(() => ({
      transform: [{ scale: withSpring(pressed.value ? 0.95 : 1) }],
    }));

  return (
    <TapGestureHandler
      onGestureEvent={eventHandler}
      onActivated={() => onPress && onPress()}
      {...tapGestureHandlerProps}
    >
      <StyledTapContainer style={[style, animatedStyle]}>
        {children}
      </StyledTapContainer>
    </TapGestureHandler>
  );
};
