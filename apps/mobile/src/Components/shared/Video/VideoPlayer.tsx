import React, { FC, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { FadeIn, FadeOut } from "react-native-reanimated";
import Video, { VideoProperties } from "react-native-video";
import { useTheme } from "../../../styles/theme";
import { MuteIcon, SoundIcon } from "../../icons";
import { FullScreenIcon } from "../../icons/FullScreenIcon";
import { IVideoPlayerState } from "./interfaces";
import {
  StyledFullScreenButtonContainer,
  StyledSoundButtonContainer,
  StyledVideoPlayerContainer,
  StyledVideoPlayerControlsContainer,
} from "./styled";

export const VideoPlayer: FC<VideoProperties> = props => {
  const theme = useTheme();

  const [playerState, setPlayerState] = useState<IVideoPlayerState>({
    isMuted: false,
    showControls: false,
    isFullScreen: false,
  });

  const handleMute = () => {
    setPlayerState({ ...playerState, isMuted: !playerState.isMuted });
  };

  const handleFullScreen = () => {
    StatusBar.setHidden(!playerState.isFullScreen);
    setPlayerState({ ...playerState, isFullScreen: !playerState.isFullScreen });
  };

  const handleShowControls = () => {
    setPlayerState({ ...playerState, showControls: !playerState.showControls });
  };

  useEffect(() => {
    setTimeout(() => {
      if (playerState.showControls)
        setPlayerState({ ...playerState, showControls: false });
    }, 3000);
  }, [playerState.showControls]);

  return (
    <StyledVideoPlayerContainer
      android_disableSound={true}
      onPress={handleShowControls}
    >
      <>
        <Video {...props} muted={playerState.isMuted} />
        {playerState.showControls && (
          <StyledVideoPlayerControlsContainer
            entering={FadeIn}
            exiting={FadeOut}
          >
            <StyledFullScreenButtonContainer onPress={handleFullScreen}>
              <FullScreenIcon
                height={15}
                width={15}
                color={theme?.textColors?.secondary}
              />
            </StyledFullScreenButtonContainer>
          </StyledVideoPlayerControlsContainer>
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
