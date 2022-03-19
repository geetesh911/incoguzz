import React from "react";
import Slider from "@react-native-community/slider";
import {
  StyledProgressBarContainer,
  StyledProgressBarLeftTimeText,
  StyledProgressBarRightTimeText,
  StyledProgressBarTimeContainer,
} from "./styled";
import { useTheme } from "../../../styles/theme";

interface Props {
  currentTime: number;
  duration: number;
  onSlideCapture: (data: { seekTime: number }) => void;
  onSlideStart: () => void;
  onSlideComplete: () => void;
}

export const ProgressBar: React.FC<Props> = ({
  currentTime,
  duration,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
}) => {
  const theme = useTheme();

  function getMinutesFromSeconds(time: number) {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : "0" + minutes}:${
      seconds >= 10 ? seconds : "0" + seconds
    }`;
  }

  function handleOnSlide(time: number) {
    onSlideCapture({ seekTime: time });
  }

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  return (
    <StyledProgressBarContainer>
      <Slider
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        step={1}
        onValueChange={handleOnSlide}
        onSlidingStart={onSlideStart}
        onSlidingComplete={onSlideComplete}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.textColors.secondary}
        thumbTintColor={theme.colors.primary}
      />
      <StyledProgressBarTimeContainer>
        <StyledProgressBarLeftTimeText>
          {position}
        </StyledProgressBarLeftTimeText>
        <StyledProgressBarRightTimeText>
          {fullDuration}
        </StyledProgressBarRightTimeText>
      </StyledProgressBarTimeContainer>
    </StyledProgressBarContainer>
  );
};
