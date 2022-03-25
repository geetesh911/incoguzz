import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import { OnLoadData } from "react-native-video";
import { useAppSelector } from "../../../redux/hooks";
import { VideoPlayer } from "../../shared/Video";
import { IMediaProperties } from "../Feed";
import { StyledMediaContainer } from "./styled";

interface IPostVideoProps {
  videoUrl: string;
  thumbnailUrl?: string;
  paused?: boolean;
}

export const PostVideo: FC<IPostVideoProps> = ({
  videoUrl,
  thumbnailUrl,
  paused,
}) => {
  const [{ height, width }, setVideoProperties] = useState<IMediaProperties>({
    height: 1,
    width: 1,
  });

  const videoPlayerState = useAppSelector(state => state.app.videoPlayerState);

  const onVideoLoad = (data: OnLoadData) => {
    setVideoProperties({
      height: data.naturalSize.height,
      width: data.naturalSize.width,
    });
  };
  return (
    <StyledMediaContainer
      height={height}
      width={width}
      isFullScreen={videoPlayerState?.isFullScreen}
    >
      <VideoPlayer
        resizeMode={"contain"}
        style={styles.videoPlayer}
        onLoad={onVideoLoad}
        poster={thumbnailUrl}
        source={{ uri: videoUrl }}
        paused={paused}
        showFullScreenButton={true}
      />
    </StyledMediaContainer>
  );
};

const styles = StyleSheet.create({
  videoPlayer: {
    flex: 1,
  },
});
