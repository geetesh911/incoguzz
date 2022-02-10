import React, { FC } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { NativeModules } from "react-native";
import { Animated, ImageSourcePropType, ImageStyle } from "react-native";
import {
  PinchGestureHandler,
  PinchGestureHandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import { ZoomableImage } from "../../Components/shared/ZoomableImage/ZoomableImage";

export const AboutScreen: FC = () => {
  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      console.log("s");
      Alert.alert("Single tap!");
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    // .maxDurationMs(250)
    .onStart(() => {
      console.log("d");
      Alert.alert("Double tap!");
    });

  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      Alert.alert(`Long pressed for ${e.duration} ms!`);
    }
  });

  return (
    <ZoomableImage
      imageSource={{
        uri: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      }}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    // borderRadius: 100,
    backgroundColor: "blue",
    alignSelf: "center",
  },
});
