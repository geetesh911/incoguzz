import React, { FC } from "react";
import { VideoProperties } from "react-native-video";
import { VideoPlayer } from "./VideoPlayer";

export const AudioPlayer: FC<VideoProperties> = props => {
  return <VideoPlayer {...props} audioOnly={true} />;
};
