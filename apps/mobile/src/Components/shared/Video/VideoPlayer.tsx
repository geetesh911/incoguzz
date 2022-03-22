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

type IVideoPlayerProps = VideoProperties & {
  isFullScreen?: boolean;
};

const AnimatedBackwardTenSecIcon =
  Animated.createAnimatedComponent(BackwardTenSecIcon);

const AnimatedForwardTenSecIcon =
  Animated.createAnimatedComponent(ForwardTenSecIcon);

export const VideoPlayer: FC<IVideoPlayerProps> = props => {
  const theme = useTheme();

  const audioRef = createRef<Video>();

  const [playbackSpeeds] = useState<number[]>([0.5, 1, 1.5, 2]);

  const [playerState, setPlayerState] = useState<IVideoPlayerState>({
    isMuted: false,
    isPaused: true,
    isFullScreen: false,
    isLoading: false,
    isError: false,
    currentTime: 0,
    duration: 0,
    playbackRate: 1,
  });

  const [showForwardButton, setShowForwardButton] = useState<boolean>(false);
  const [showBackwardButton, setShowBackwardButton] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  const onLoadEnd = (data: OnLoadData) => {
    setPlayerState({
      ...playerState,
      duration: data.duration,
      isLoading: false,
    });
  };

  const onLoadStart = () => {
    setPlayerState({ ...playerState, isLoading: true });
  };

  const onSeek = (data: IOnSeekData) => {
    audioRef?.current?.seek(data.seekTime);
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
    audioRef?.current?.seek(newTime);
    setPlayerState({ ...playerState, currentTime: newTime });
    setShowForwardButton(true);
  };

  const handleBackwardTenSeconds = () => {
    const newTime = playerState.currentTime - 10;
    audioRef?.current?.seek(newTime);
    setPlayerState({ ...playerState, currentTime: newTime });
    setShowBackwardButton(true);
  };

  const handleFullScreen = () => {
    StatusBar.setHidden(!playerState.isFullScreen);
    setPlayerState({ ...playerState, isFullScreen: !playerState.isFullScreen });
  };

  useEffect(() => {
    setTimeout(() => {
      if (showControls) setShowControls(false);
    }, 3000);
  }, [showControls]);

  useEffect(() => {
    setTimeout(() => {
      if (showBackwardButton) setShowBackwardButton(false);
    }, 500);
  }, [showBackwardButton]);

  useEffect(() => {
    setTimeout(() => {
      if (showForwardButton) setShowForwardButton(false);
    }, 500);
  }, [showForwardButton]);

  const BackwardGesture = () => (
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

  const ForwardGesture = () => (
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

  const Controls = () => (
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
      <BackwardGesture />
      <ForwardGesture />
      <StyledForBackContainer></StyledForBackContainer>
      <StyledPlaybackRateButtonContainer onPress={handlePlaybackRate}>
        <StyledPlaybackText>{`${playerState?.playbackRate}x`}</StyledPlaybackText>
      </StyledPlaybackRateButtonContainer>
      {props.isFullScreen && (
        <StyledFullScreenButtonContainer onPress={handleFullScreen}>
          <FullScreenIcon
            height={15}
            width={15}
            color={theme?.textColors?.secondary}
          />
        </StyledFullScreenButtonContainer>
      )}
    </StyledAudioPlayerControlsContainer>
  );

  const LoadingComponent = () => {
    return (
      <>
        {playerState.isLoading && (
          <StyledVideoLoaderContainer>
            <ActivityIndicator size="large" color={theme?.textColors.primary} />
          </StyledVideoLoaderContainer>
        )}
      </>
    );
  };

  const ErrorComponent = () => {
    return (
      <>
        {playerState.isError && (
          <StyledErrorTextContainer>
            <StyledErrorText>Some error occured</StyledErrorText>
          </StyledErrorTextContainer>
        )}
      </>
    );
  };
  return (
    <StyledVideoPlayerContainer android_disableSound={true}>
      <>
        <Video
          {...props}
          ref={audioRef}
          muted={playerState.isMuted}
          paused={playerState.isPaused}
          rate={playerState.playbackRate}
          onLoad={onLoadEnd}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          onError={onError}
        />
        {showControls && <Controls />}
        {!showControls && <BackwardGesture />}
        {!showControls && <ForwardGesture />}
        <LoadingComponent />
        <ErrorComponent />
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
