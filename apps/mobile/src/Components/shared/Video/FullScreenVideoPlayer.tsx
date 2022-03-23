import { View } from "react-native";
import React, { FC } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { useAppSelector } from "../../../redux/hooks";
import { IVideoPlayerState } from "./interfaces";
import { StyledFullScreenVideoPlayer } from "./styled";

export const FullScreenVideoPlayer: FC = () => {
  const videoPlayerState = useAppSelector(state => state.app.videoPlayerState);

  return (
    <StyledFullScreenVideoPlayer>
      <VideoPlayer
        resizeMode={"contain"}
        style={{ flex: 1 }}
        // onLoad={onVideoLoad}
        poster={
          "https://res.cloudinary.com/geeteshpp/image/upload/v1647496797/Screenshot_2022-03-17_112932_dytkzv.png"
        }
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        }}
        paused={false}
        showFullScreenButton={true}
        defaultState={videoPlayerState as IVideoPlayerState}
      />
    </StyledFullScreenVideoPlayer>
  );
};
