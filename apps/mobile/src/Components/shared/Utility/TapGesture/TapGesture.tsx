import React, { FC } from "react";
import {
  LongPressGestureHandler,
  State,
  TapGestureHandler,
} from "react-native-gesture-handler";

export interface ITapGestureProps {
  singleTap?: () => void;
  doubleTap?: () => void;
}

export const TapGesture: FC<ITapGestureProps> = ({
  singleTap,
  doubleTap,
  children,
}) => {
  const doubleTapRef = React.createRef();
  return (
    <LongPressGestureHandler
      onHandlerStateChange={event => {
        if (event.nativeEvent.state === State.ACTIVE) {
        }
      }}
      minDurationMs={800}
    >
      <TapGestureHandler
        onHandlerStateChange={event => {
          if (event.nativeEvent.state === State.ACTIVE) {
            singleTap?.();
          }
        }}
        waitFor={doubleTapRef}
      >
        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={event => {
            if (event?.nativeEvent?.state === State.ACTIVE) {
              doubleTap?.();
            }
          }}
          numberOfTaps={2}
        >
          {children}
        </TapGestureHandler>
      </TapGestureHandler>
    </LongPressGestureHandler>
  );
};
