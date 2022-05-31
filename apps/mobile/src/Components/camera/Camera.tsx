import { StyleSheet, Linking } from "react-native";
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useCameraDevices,
  Camera as RNCamera,
  CameraDeviceFormat,
  sortFormats,
  frameRateIncluded,
  CameraRuntimeError,
  VideoFile,
  PhotoFile,
  CameraDevice,
  CameraPermissionStatus,
} from "react-native-vision-camera";
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useSharedValue,
} from "react-native-reanimated";
import { useIsForeground } from "./hooks/useIsForeground";
import { useIsFocused } from "@react-navigation/core";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { MAX_ZOOM_FACTOR } from "./constants/camera.constant";
import {
  StyledCameraContainer,
  StyledCaptureButton,
  StyledControlButton,
  StyledFpsText,
  StyledRightButtonRow,
} from "./styled";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { If } from "../shared";
import { useAppDispatch } from "../../redux/hooks";
import { addCapturedMedia } from "@incoguzz/redux/dist/reducers/camera";

const ReanimatedCamera = Reanimated.createAnimatedComponent(RNCamera);
Reanimated.addWhitelistedNativeProps({
  zoom: true,
});

const SCALE_FULL_ZOOM = 3;

export const Camera: FC = () => {
  const dispatch = useAppDispatch();

  const camera = useRef<RNCamera>(null);

  const [isCameraInitialized, setIsCameraInitialized] = useState(false);

  const [flash, setFlash] = useState<"off" | "on">("off");
  const [enableHdr, setEnableHdr] = useState(false);
  const [enableNightMode, setEnableNightMode] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<"front" | "back">(
    "back",
  );
  const [is60Fps, setIs60Fps] = useState(true);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>("not-determined");
  const [microphonePermissionStatus, setMicrophonePermissionStatus] =
    useState<CameraPermissionStatus>("not-determined");

  const isPressingButton = useSharedValue(false);

  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;

  const devices = useCameraDevices();
  const device = devices[cameraPosition];

  const formats = useMemo<CameraDeviceFormat[]>(() => {
    if (device?.formats == null) return [];
    return device.formats.sort(sortFormats);
  }, [device?.formats]);

  const supportsCameraFlipping = useMemo(
    () => devices.back !== null && devices.front !== null,
    [devices.back, devices.front],
  );
  const supportsFlash = device?.hasFlash ?? false;
  const supportsHdr = useMemo(
    () => formats.some(f => f.supportsVideoHDR || f.supportsPhotoHDR),
    [formats],
  );

  const supports60Fps = useMemo(
    () =>
      formats.some(f =>
        f.frameRateRanges.some(rate => frameRateIncluded(rate, 60)),
      ),
    [formats],
  );

  const fps = useMemo(() => {
    if (!is60Fps) return 30;

    if (enableNightMode && !device?.supportsLowLightBoost) {
      // User has enabled Night Mode, but Night Mode is not natively supported, so we simulate it by lowering the frame rate.
      return 30;
    }

    const supportsHdrAt60Fps = formats.some(
      f =>
        f.supportsVideoHDR &&
        f.frameRateRanges.some(r => frameRateIncluded(r, 60)),
    );
    if (enableHdr && !supportsHdrAt60Fps) {
      // User has enabled HDR, but HDR is not supported at 60 FPS.
      return 30;
    }

    const isSupports60Fps = formats.some(f =>
      f.frameRateRanges.some(r => frameRateIncluded(r, 60)),
    );
    if (!isSupports60Fps) {
      // 60 FPS is not supported by any format.
      return 30;
    }
    // If nothing blocks us from using it, we default to 60 FPS.
    return 60;
  }, [
    device?.supportsLowLightBoost,
    enableHdr,
    enableNightMode,
    formats,
    is60Fps,
  ]);

  const zoom = useSharedValue(0);
  const minZoom = device?.minZoom ?? 1;
  const maxZoom = Math.min(device?.maxZoom ?? 1, MAX_ZOOM_FACTOR);

  const neutralZoom = device?.neutralZoom ?? 1;

  const requestMicrophonePermission = useCallback(async () => {
    console.log("Requesting microphone permission...");
    const permission = await RNCamera.requestMicrophonePermission();
    console.log(`Microphone permission status: ${permission}`);

    if (["denied", "not-determined"].includes(permission))
      await Linking.openSettings();

    setMicrophonePermissionStatus(permission);
  }, []);

  const requestCameraPermission = useCallback(async () => {
    console.log("Requesting camera permission...");
    const permission = await RNCamera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (["denied", "not-determined"].includes(permission))
      await Linking.openSettings();

    setCameraPermissionStatus(permission);
  }, []);

  useEffect(() => {
    (async () => {
      if (cameraPermissionStatus !== "authorized")
        await requestCameraPermission();
      if (microphonePermissionStatus !== "authorized")
        await requestMicrophonePermission();
    })();
  }, []);

  useEffect(() => {
    // Run everytime the neutralZoomScaled value changes. (reset zoom when device changes)
    zoom.value = neutralZoom;
  }, [neutralZoom, zoom]);

  useEffect(() => {
    RNCamera.getMicrophonePermissionStatus().then(status =>
      setHasMicrophonePermission(status === "authorized"),
    );
  }, []);

  const canToggleNightMode = enableNightMode
    ? true // it's enabled so you have to be able to turn it off again
    : (device?.supportsLowLightBoost ?? false) || fps > 30; // either we have native support, or we can lower the FPS

  const setIsPressingButton = useCallback(
    (_isPressingButton: boolean) => {
      isPressingButton.value = _isPressingButton;
    },
    [isPressingButton],
  );

  const cameraAnimatedProps = useAnimatedProps(() => {
    const z = Math.max(Math.min(zoom.value, maxZoom), minZoom);
    return {
      zoom: z,
    };
  }, [maxZoom, minZoom, zoom]);

  const onFlipCameraPressed = useCallback(() => {
    setCameraPosition(position => (position === "back" ? "front" : "back"));
  }, []);

  const onFlashPressed = useCallback(() => {
    setFlash(isFlashOn => (isFlashOn === "off" ? "on" : "off"));
  }, []);

  const onInitialized = useCallback(() => {
    console.log("Camera initialized!");
    setIsCameraInitialized(true);
  }, []);

  const onError = useCallback((error: CameraRuntimeError) => {
    console.error(error);
  }, []);

  const onMediaCaptured = useCallback(
    (media: PhotoFile | VideoFile, type: "photo" | "video") => {
      console.log(`Media captured! ${JSON.stringify(media)}`, type);
      dispatch(addCapturedMedia({ path: media.path, type }));
    },
    [],
  );

  const onDoubleTap = useCallback(() => {
    onFlipCameraPressed();
  }, [onFlipCameraPressed]);

  const onPinchGesture = useAnimatedGestureHandler<
    PinchGestureHandlerGestureEvent,
    { startZoom?: number }
  >({
    onStart: (_, context) => {
      context.startZoom = zoom.value;
    },
    onActive: (event, context) => {
      // we're trying to map the scale gesture to a linear zoom here
      const startZoom = context.startZoom ?? 0;
      const scale = interpolate(
        event.scale,
        [1 - 1 / SCALE_FULL_ZOOM, 1, SCALE_FULL_ZOOM],
        [-1, 0, 1],
        Extrapolate.CLAMP,
      );
      zoom.value = interpolate(
        scale,
        [-1, 0, 1],
        [minZoom, startZoom, maxZoom],
        Extrapolate.CLAMP,
      );
    },
  });

  const icons = {
    flash: {
      on: "flash",
      off: "flash-off",
    },
    hdr: {
      true: "hdr",
      false: "hdr-off",
    },
    nightMode: {
      true: "moon",
      false: "moon-outline",
    },
  };

  return (
    <StyledCameraContainer>
      <If
        condition={
          !!device &&
          cameraPermissionStatus === "authorized" &&
          microphonePermissionStatus === "authorized"
        }
      >
        <PinchGestureHandler onGestureEvent={onPinchGesture} enabled={isActive}>
          <Reanimated.View style={StyleSheet.absoluteFill}>
            <TapGestureHandler onEnded={onDoubleTap} numberOfTaps={2}>
              <ReanimatedCamera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device as CameraDevice}
                lowLightBoost={device?.supportsLowLightBoost && enableNightMode}
                isActive={isActive}
                photo={true}
                video={true}
                hdr={enableHdr}
                enableZoomGesture={false}
                animatedProps={cameraAnimatedProps}
                audio={hasMicrophonePermission}
                orientation="portrait"
                onInitialized={onInitialized}
                onError={onError}
              />
            </TapGestureHandler>
          </Reanimated.View>
        </PinchGestureHandler>
        <StyledCaptureButton
          camera={camera}
          onMediaCaptured={onMediaCaptured}
          cameraZoom={zoom}
          minZoom={minZoom}
          maxZoom={maxZoom}
          flash={supportsFlash ? flash : "off"}
          enabled={isCameraInitialized && isActive}
          setIsPressingButton={setIsPressingButton}
        />
        <StyledRightButtonRow>
          <If condition={supportsCameraFlipping}>
            <StyledControlButton onPress={onFlipCameraPressed}>
              <IonIcon name="camera-reverse" color="white" size={24} />
            </StyledControlButton>
          </If>
          <If condition={supportsFlash}>
            <StyledControlButton onPress={onFlashPressed}>
              <IonIcon name={icons.flash[flash]} color="white" size={24} />
            </StyledControlButton>
          </If>
          <If condition={supports60Fps}>
            <StyledControlButton onPress={() => setIs60Fps(!is60Fps)}>
              <StyledFpsText>
                {is60Fps ? "60" : "30"}
                {"\n"}FPS
              </StyledFpsText>
            </StyledControlButton>
          </If>
          <If condition={supportsHdr}>
            <StyledControlButton onPress={() => setEnableHdr(h => !h)}>
              <MaterialIcon
                name={icons.hdr[enableHdr.toString() as "true" | "false"]}
                color="white"
                size={24}
              />
            </StyledControlButton>
          </If>
          <If condition={canToggleNightMode}>
            <StyledControlButton
              onPress={() => setEnableNightMode(!enableNightMode)}
            >
              <IonIcon
                name={
                  icons.nightMode[
                    enableNightMode.toString() as "true" | "false"
                  ]
                }
                color="white"
                size={24}
              />
            </StyledControlButton>
          </If>
        </StyledRightButtonRow>
      </If>
    </StyledCameraContainer>
  );
};
