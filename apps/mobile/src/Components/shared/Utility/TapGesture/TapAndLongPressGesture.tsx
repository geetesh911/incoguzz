import React, { FC } from "react";
import {
  LongPressGestureHandler,
  State,
  TapGestureHandler,
} from "react-native-gesture-handler";

type ITapAndLongPressGesture = {
  simultaneousHandlers?: React.Ref<unknown> | React.Ref<unknown>[];
  maxTapDurationMs?: number;
  minLongPressDurationMs?: number;
  maxLongPressFingerTravelDist?: number;
  onLongPress?: () => void;
  onLongPressOver?: () => void;
  onPress?: () => void;
};

export const TapAndLongPressGesture: FC<ITapAndLongPressGesture> = ({
  children,
  simultaneousHandlers,
  maxTapDurationMs,
  minLongPressDurationMs,
  maxLongPressFingerTravelDist,
  onLongPress,
  onLongPressOver,
  onPress,
}) => {
  return (
    <LongPressGestureHandler
      onActivated={() => onLongPress?.()}
      onHandlerStateChange={event => {
        if (
          event?.nativeEvent?.state === State.END ||
          event?.nativeEvent?.state === State.CANCELLED
        )
          onLongPressOver?.();
      }}
      minDurationMs={minLongPressDurationMs || 200}
      maxDist={maxLongPressFingerTravelDist || 10000}
    >
      <TapGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onActivated={onPress}
        maxDurationMs={maxTapDurationMs || 3000}
      >
        {children}
      </TapGestureHandler>
    </LongPressGestureHandler>
  );
};
