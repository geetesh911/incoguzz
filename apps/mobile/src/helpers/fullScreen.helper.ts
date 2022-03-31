import { StatusBar } from "react-native";
import SystemNavigationBar from "react-native-system-navigation-bar";

export class FullScreenHelper {
  static toggleFullScreen(isFullScreen: boolean) {
    StatusBar.setHidden(isFullScreen);

    isFullScreen
      ? SystemNavigationBar?.navigationHide()
      : SystemNavigationBar?.navigationShow();
  }

  static enableFullScreen() {
    this.toggleFullScreen(true);
  }

  static disableFullScreen() {
    this.toggleFullScreen(false);
  }
}
