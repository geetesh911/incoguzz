import React, { FC, useEffect } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";

interface IDoubleTapProps {
  delay?: number;
  singleTap?: () => void;
  doubleTap?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const DoubleTap: FC<IDoubleTapProps> = ({
  delay,
  singleTap,
  doubleTap,
  style,
  children,
}) => {
  let delayTime = delay || 150;
  let firstPress = true;
  let timer: null | NodeJS.Timeout = null;
  let lastTime: Date | number = new Date();

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer as NodeJS.Timeout);
    };

    // eslint-disable-next-line
  }, []);

  const onTap = () => {
    // get the instance of time when pressed
    let now = new Date().getTime();

    if (firstPress) {
      // set the flag indicating first press has occured
      firstPress = false;

      //start a timer --> if a second tap doesnt come in by the delay, trigger singleTap event handler
      timer = setTimeout(() => {
        //check if user passed in prop
        singleTap?.();

        // reset back to initial state
        firstPress = true;
        timer = null;
      }, delayTime);

      // mark the last time of the press
      lastTime = now;
    } else {
      //if user pressed immediately again within span of delayTime
      if (now - (lastTime as number) < delayTime) {
        // clear the timeout for the single press
        timer && clearTimeout(timer as NodeJS.Timeout);

        //check if user passed in prop for double click
        doubleTap?.();

        // reset back to initial state
        firstPress = true;
      }
    }
  };

  return (
    <Pressable style={style} onPress={onTap}>
      {children}
    </Pressable>
  );
};
