import React, { FC } from "react";
import { ZoomableImage } from "../../Components/shared/ZoomableImage/ZoomableImage";

import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Button, StyleSheet } from "react-native";

function Box() {
  const offset = useSharedValue(0);

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(offset.value * 255) }],
    };
  });

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, defaultSpringStyles]} />
      <Animated.View style={[styles.box, customSpringStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
}

export const AboutScreen: FC = () => {
  return (
    <Box></Box>
    // <ZoomableImage
    //   imageSource={{
    //     uri: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //   }}
    // />
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: "blue",
  },
});
