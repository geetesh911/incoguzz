import React, { FC } from "react";
import { SoundIcon } from "../../icons";
import {
  StyledSoundButtonContainer,
  StyledVideoPlayerControlsContainer,
} from "./styled";

const VideoPlayerControls: FC = () => {
  return (
    <StyledVideoPlayerControlsContainer>
      <StyledSoundButtonContainer>
        <SoundIcon height={15} width={15} />
      </StyledSoundButtonContainer>
    </StyledVideoPlayerControlsContainer>
  );
};

export default VideoPlayerControls;
