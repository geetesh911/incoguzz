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
import { StyledTapContainer, StyledTapOverlay } from "./styled";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
import { RequireAllOrNone } from "type-fest";

export enum TypeEffect {
  scale = "scale",
  overlay = "overlay",
}

type ITapViewProps = RequireAllOrNone<
  {
    tapGestureHandlerProps?: Partial<TapGestureHandlerProps>;
    effect?: TypeEffect;
    overlayStyle?: StyleProp<ViewStyle>;
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
  effect,
  overlayStyle,
  style,
  customAnimatedStyle,
  tapGestureHandlerProps,
  customEventHandler,
  onPress,
}) => {
  effect = effect || TypeEffect.scale;
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
      transform: [
        {
          scale: withSpring(
            pressed.value && effect === TypeEffect.scale ? 0.95 : 1,
          ),
        },
      ],
    }));

  const overlayAnimatedStyle =
    customAnimatedStyle ||
    useAnimatedStyle(() => ({
      display: pressed.value && effect === TypeEffect.overlay ? "flex" : "none",
    }));

  return (
    <TapGestureHandler
      onGestureEvent={eventHandler}
      onActivated={() => onPress && onPress()}
      {...tapGestureHandlerProps}
    >
      <StyledTapContainer style={[style, animatedStyle]}>
        {children}
        {pressed && effect === TypeEffect.overlay && (
          <StyledTapOverlay style={[overlayAnimatedStyle, overlayStyle]} />
        )}
      </StyledTapContainer>
    </TapGestureHandler>
  );
};
