import React, { createRef, FC, useEffect, useState } from "react";
import { FadeIn, FadeOut } from "react-native-reanimated";
import Video, { VideoProperties } from "react-native-video";
import { useTheme } from "../../../styles/theme";
import { MuteIcon, PlayIcon, SoundIcon } from "../../icons";
import { BackwardTenSecIcon } from "../../icons/BackwardTenSecIcon";
import { ForwardTenSecIcon } from "../../icons/ForwardTenSecIcon";
import { PauseIcon } from "../../icons/PauseIcon";
import { IAudioPlayerState } from "./interfaces";
import {
  StyledPlayButtonContainer,
  StyledSoundButtonContainer,
  StyledVideoPlayerContainer,
  StyledAudioPlayerControlsContainer,
  StyledForBackButtonContainer,
  StyledPlaybackRateButtonContainer,
  StyledPlaybackText,
} from "./styled";

export const AudioPlayer: FC<VideoProperties> = props => {
  const theme = useTheme();

  const audioRef = createRef<Video>();

  const [playbackSpeeds] = useState<number[]>([0.5, 1, 1.5, 2]);

  const [playerState, setPlayerState] = useState<IAudioPlayerState>({
    isMuted: false,
    isPaused: false,
    currentTime: 0,
    duration: 0,
    playbackRate: 1,
  });

  const [showControls, setShowControls] = useState<boolean>(false);

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
    setPlayerState({ ...playerState, isPaused: !playerState.isPaused });
  };

  const handleShowControls = () => {
    setShowControls(!showControls);
  };

  const handleForwardTenSeconds = () => {
    const newTime = playerState.currentTime + 10;
    audioRef?.current?.seek(newTime);
    setPlayerState({ ...playerState, currentTime: newTime });
  };

  const handleBackwardTenSeconds = () => {
    const newTime = playerState.currentTime - 10;
    audioRef?.current?.seek(newTime);
    setPlayerState({ ...playerState, currentTime: newTime });
  };

  useEffect(() => {
    setTimeout(() => {
      if (showControls) setShowControls(false);
    }, 3000);
  }, [showControls]);

  return (
    <StyledVideoPlayerContainer
      android_disableSound={true}
      onPress={handleShowControls}
    >
      <>
        <Video
          {...props}
          ref={audioRef}
          muted={playerState.isMuted}
          paused={playerState.isPaused}
          rate={playerState.playbackRate}
        />
        {showControls && (
          <StyledAudioPlayerControlsContainer
            entering={FadeIn}
            exiting={FadeOut}
          >
            <StyledForBackButtonContainer onPress={handleBackwardTenSeconds}>
              <BackwardTenSecIcon
                height={30}
                width={30}
                color={theme?.textColors?.secondary}
              />
            </StyledForBackButtonContainer>
            <StyledPlayButtonContainer onPress={handlePlayPause}>
              {playerState.isPaused ? (
                <PlayIcon
                  height={25}
                  width={25}
                  color={theme?.textColors?.secondary}
                />
              ) : (
                <PauseIcon
                  height={25}
                  width={25}
                  color={theme?.textColors?.secondary}
                />
              )}
            </StyledPlayButtonContainer>
            <StyledForBackButtonContainer onPress={handleForwardTenSeconds}>
              <ForwardTenSecIcon
                height={30}
                width={30}
                color={theme?.textColors?.secondary}
              />
            </StyledForBackButtonContainer>
            <StyledPlaybackRateButtonContainer onPress={handlePlaybackRate}>
              <StyledPlaybackText>{`${playerState?.playbackRate}x`}</StyledPlaybackText>
            </StyledPlaybackRateButtonContainer>
          </StyledAudioPlayerControlsContainer>
        )}
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
