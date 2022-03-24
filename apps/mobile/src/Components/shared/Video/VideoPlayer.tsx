import React, { createRef, FC, useEffect, useState } from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import Video, {
  LoadError,
  OnLoadData,
  OnProgressData,
  VideoProperties,
} from "react-native-video";
import { useTheme } from "../../../styles/theme";
import { MuteIcon, PlayIcon, SoundIcon } from "../../icons";
import { BackwardTenSecIcon } from "../../icons/BackwardTenSecIcon";
import { ForwardTenSecIcon } from "../../icons/ForwardTenSecIcon";
import { FullScreenIcon } from "../../icons/FullScreenIcon";
import { PauseIcon } from "../../icons/PauseIcon";
import { TapGesture } from "../Utility";
import { IOnSeekData, IVideoPlayerState } from "./interfaces";
import { ProgressBar } from "./ProgressBar";
import {
  StyledPlayButtonContainer,
  StyledSoundButtonContainer,
  StyledVideoPlayerContainer,
  StyledAudioPlayerControlsContainer,
  StyledForButtonContainer,
  StyledBackButtonContainer,
  StyledPlaybackRateButtonContainer,
  StyledPlaybackText,
  StyledAudioPlayerPlayControlsContainer,
  StyledFullScreenButtonContainer,
  StyledForBackContainer,
  StyledVideoLoaderContainer,
  StyledErrorText,
  StyledErrorTextContainer,
} from "./styled";
import Orientation from "react-native-orientation-locker";
import SystemNavigationBar from "react-native-system-navigation-bar";
import { useAppDispatch } from "../../../redux/hooks";
import { setVideoPlayerState } from "@incoguzz/redux";
import { FullScreenMinimizeIcon } from "../../icons/FullScreenMinimizeIcon";

type IVideoPlayerProps = VideoProperties & {
  showFullScreenButton?: boolean;
  defaultState?: IVideoPlayerState;
};

const AnimatedBackwardTenSecIcon =
  Animated.createAnimatedComponent(BackwardTenSecIcon);

const AnimatedForwardTenSecIcon =
  Animated.createAnimatedComponent(ForwardTenSecIcon);

export const VideoPlayer: FC<IVideoPlayerProps> = props => {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const videoPlayerRef = createRef<Video>();

  const [playbackSpeeds] = useState<number[]>([0.5, 1, 1.5, 2]);

  const [playerState, setPlayerState] = useState<IVideoPlayerState>(
    props.defaultState || {
      isMuted: false,
      isPaused: false,
      isFullScreen: false,
      isLoading: false,
      isError: false,
      isRepeat: false,
      currentTime: 0,
      duration: 0,
      playbackRate: 1,
    },
  );

  const [showForwardButton, setShowForwardButton] = useState<boolean>(false);
  const [showBackwardButton, setShowBackwardButton] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  const onLoadEnd = (data: OnLoadData) => {
    props?.onLoad && props.onLoad(data);
    if (props.defaultState) {
      videoPlayerRef?.current?.seek(props?.defaultState?.currentTime);
    }
    setPlayerState({
      ...playerState,
      duration: data.duration,
      currentTime: props.defaultState ? props.defaultState?.currentTime : 0,
      isLoading: false,
      isPaused: props.paused || false,
    });
  };

  const onLoadStart = () => {
    setPlayerState({ ...playerState, isLoading: true });
  };

  const onSeek = (data: IOnSeekData) => {
    videoPlayerRef?.current?.seek(data.seekTime);
    setPlayerState({ ...playerState, currentTime: data.seekTime });
  };

  const onProgress = (data: OnProgressData) => {
    setPlayerState({ ...playerState, currentTime: data.currentTime });
  };

  const onError = (data: LoadError) => {
    setPlayerState({ ...playerState, isLoading: false, isError: true });
  };

  const handlePlaybackRate = () => {
    const currentSpeedIndex = playbackSpeeds.findIndex(
      speed => speed === playerState.playbackRate,
    );
    const newPlaybackRate =
      playbackSpeeds[
        currentSpeedIndex >= playbackSpeeds.length - 1
          ? 0
          : currentSpeedIndex + 1
      ];
    setPlayerState({ ...playerState, playbackRate: newPlaybackRate });
  };

  const handleMute = () => {
    setPlayerState({ ...playerState, isMuted: !playerState.isMuted });
  };

  const handlePlayPause = () => {
    if (!playerState.isLoading && !playerState.isError)
      setPlayerState({ ...playerState, isPaused: !playerState.isPaused });
  };

  const handleShowControls = () => {
    setShowControls(!showControls);
  };

  const handleForwardTenSeconds = () => {
    const newTime = playerState.currentTime + 10;
    videoPlayerRef?.current?.seek(newTime);
    setPlayerState({ ...playerState, currentTime: newTime });
    setShowForwardButton(true);
  };

  const handleBackwardTenSeconds = () => {
    const newTime = playerState.currentTime - 10;
    videoPlayerRef?.current?.seek(newTime);
    setPlayerState({ ...playerState, currentTime: newTime });
    setShowBackwardButton(true);
  };

  const handleEnd = () => {
    setPlayerState({
      ...playerState,
      currentTime: 0,
      isPaused: !playerState.isRepeat,
    });
  };

  const handleFullScreen = async () => {
    const newFullScreenValue = !playerState.isFullScreen;

    dispatch(
      setVideoPlayerState({
        ...playerState,
        isFullScreen: newFullScreenValue,
      }),
    );

    StatusBar.setHidden(newFullScreenValue);

    newFullScreenValue
      ? SystemNavigationBar?.navigationHide()
      : SystemNavigationBar?.navigationShow();

    setPlayerState({ ...playerState, isFullScreen: newFullScreenValue });

    if (newFullScreenValue) Orientation.lockToLandscapeLeft();
    else Orientation.lockToPortrait();
  };

  useEffect(() => {
    const showControlsTimeout = setTimeout(() => {
      if (showControls) setShowControls(false);
    }, 3000);

    return () => {
      clearTimeout(showControlsTimeout);
    };
  }, [showControls]);

  useEffect(() => {
    const showBackwardButtonTimeout = setTimeout(() => {
      if (showBackwardButton) setShowBackwardButton(false);
    }, 500);

    return () => {
      clearTimeout(showBackwardButtonTimeout);
    };
  }, [showBackwardButton]);

  useEffect(() => {
    const showForwardButtonTimeout = setTimeout(() => {
      if (showForwardButton) setShowForwardButton(false);
    }, 500);

    return () => {
      clearTimeout(showForwardButtonTimeout);
    };
  }, [showForwardButton]);

  const BackwardGesture = (
    <TapGesture
      singleTap={handleShowControls}
      doubleTap={handleBackwardTenSeconds}
    >
      <StyledBackButtonContainer>
        {showBackwardButton && (
          <AnimatedBackwardTenSecIcon
            height={30}
            width={30}
            color={theme?.textColors?.secondary}
            entering={FadeIn}
            exiting={FadeOut}
          />
        )}
      </StyledBackButtonContainer>
    </TapGesture>
  );

  const ForwardGesture = (
    <TapGesture
      singleTap={handleShowControls}
      doubleTap={handleForwardTenSeconds}
    >
      <StyledForButtonContainer>
        {showForwardButton && (
          <AnimatedForwardTenSecIcon
            height={30}
            width={30}
            color={theme?.textColors?.secondary}
            entering={FadeIn}
            exiting={FadeOut}
          />
        )}
      </StyledForButtonContainer>
    </TapGesture>
  );

  const Controls = (
    <StyledAudioPlayerControlsContainer
      entering={FadeIn}
      exiting={FadeOut}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[
        "rgba(0,0,0,0.5)",
        "rgba(0,0,0,0)",
        "rgba(0,0,0,0)",
        "rgba(0,0,0,0)",
        "rgba(0,0,0,0.5)",
      ]}
    >
      <StyledAudioPlayerPlayControlsContainer>
        <StyledPlayButtonContainer onPress={handlePlayPause}>
          {playerState.isPaused ? (
            <PlayIcon
              height={18}
              width={18}
              color={theme?.textColors?.secondary}
            />
          ) : (
            <PauseIcon
              height={18}
              width={18}
              color={theme?.textColors?.secondary}
            />
          )}
        </StyledPlayButtonContainer>
        <ProgressBar
          currentTime={playerState.currentTime}
          duration={playerState.duration > 0 ? playerState.duration : 0}
          onSlideStart={handlePlayPause}
          onSlideComplete={handlePlayPause}
          onSlideCapture={onSeek}
        />
      </StyledAudioPlayerPlayControlsContainer>
      {BackwardGesture}
      {ForwardGesture}
      <StyledForBackContainer></StyledForBackContainer>
      <StyledPlaybackRateButtonContainer onPress={handlePlaybackRate}>
        <StyledPlaybackText>{`${playerState?.playbackRate}x`}</StyledPlaybackText>
      </StyledPlaybackRateButtonContainer>
      {props.showFullScreenButton && (
        <StyledFullScreenButtonContainer onPress={handleFullScreen}>
          {playerState?.isFullScreen ? (
            <FullScreenMinimizeIcon
              height={15}
              width={15}
              color={theme?.textColors?.secondary}
            />
          ) : (
            <FullScreenIcon
              height={15}
              width={15}
              color={theme?.textColors?.secondary}
            />
          )}
        </StyledFullScreenButtonContainer>
      )}
    </StyledAudioPlayerControlsContainer>
  );

  const LoadingComponent = playerState.isLoading && (
    <StyledVideoLoaderContainer>
      <ActivityIndicator size="large" color={theme?.textColors.primary} />
    </StyledVideoLoaderContainer>
  );

  const ErrorComponent = playerState.isError && (
    <StyledErrorTextContainer>
      <StyledErrorText>Some error occured</StyledErrorText>
    </StyledErrorTextContainer>
  );

  return (
    <StyledVideoPlayerContainer
      android_disableSound={true}
      onPress={handleShowControls}
    >
      <>
        <Video
          {...props}
          ref={videoPlayerRef}
          muted={playerState.isMuted}
          paused={playerState.isPaused}
          rate={playerState.playbackRate}
          onLoad={onLoadEnd}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          onError={onError}
          onEnd={handleEnd}
          repeat={playerState.isRepeat}
        />
        {showControls && Controls}
        {!showControls && BackwardGesture}
        {!showControls && ForwardGesture}
        {LoadingComponent}
        {ErrorComponent}
        <StyledSoundButtonContainer onPress={handleMute}>
          {playerState?.isMuted ? (
            <MuteIcon
              height={15}
              width={15}
              color={theme?.textColors?.primary}
            />
          ) : (
            <SoundIcon
              height={15}
              width={15}
              color={theme?.textColors?.primary}
            />
          )}
        </StyledSoundButtonContainer>
      </>
    </StyledVideoPlayerContainer>
  );
};
