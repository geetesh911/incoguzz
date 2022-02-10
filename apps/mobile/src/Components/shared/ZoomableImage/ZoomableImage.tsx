import * as React from "react";
import { Animated, ImageSourcePropType, ImageStyle } from "react-native";
import {
  PinchGestureHandler,
  PinchGestureHandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const ZoomableImage: React.FC<{
  imageStyle?: ImageStyle;
  imageSource: ImageSourcePropType;
}> = ({ imageStyle, imageSource }) => {
  const scaleVal = new Animated.Value(1);
  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: {
          scale: scaleVal,
        },
      },
    ],
    {
      useNativeDriver: false,
    },
  );

  const handleReset = (e: PinchGestureHandlerStateChangeEvent) => {
    if (e.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scaleVal, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <PinchGestureHandler
      onGestureEvent={onPinchEvent}
      onHandlerStateChange={handleReset}
    >
      <Animated.Image
        source={imageSource}
        style={{
          ...styles.image,
          ...imageStyle,
          transform: [
            { perspective: 200 },
            {
              scale: scaleVal.interpolate({
                inputRange: [0.9, 100],
                outputRange: [0.9, 100],
                extrapolateLeft: "clamp",
              }),
            },
          ],
          zIndex: scaleVal.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 9999],
          }),
        }}
      />
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 400,
    width: windowWidth,
    resizeMode: "cover",
  },
});
