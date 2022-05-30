import { Dimensions, Platform } from "react-native";

export const CONTENT_SPACING = 15;

// The maximum zoom _factor_ you should be able to zoom in
export const MAX_ZOOM_FACTOR = 20;

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Platform.select<number>({
  android: Dimensions.get("screen").height - 80,
  ios: Dimensions.get("window").height,
}) as number;

// Capture Button
export const CAPTURE_BUTTON_SIZE = 90;
