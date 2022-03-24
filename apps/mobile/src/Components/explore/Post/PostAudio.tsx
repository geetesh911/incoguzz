import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import { OnLoadData } from "react-native-video";
import { AudioPlayer } from "../../shared/Video/AudioPlayer";
import { IMediaProperties } from "../Feed";
import { StyledMediaContainer } from "./styled";

interface IPostAudioProps {
  audioUrl: string;
  thumbnailUrl?: string;
}

export const PostAudio: FC<IPostAudioProps> = ({ audioUrl, thumbnailUrl }) => {
  const [{ height, width }, setAudioProperties] = useState<IMediaProperties>({
    height: 1,
    width: 1,
  });

  const onVideoLoad = (data: OnLoadData) => {
    setAudioProperties({
      height: data.naturalSize.height,
      width: data.naturalSize.width,
    });
  };

  return (
    <StyledMediaContainer height={height} width={width}>
      <AudioPlayer
        resizeMode={"contain"}
        style={styles.videoPlayer}
        onLoad={onVideoLoad}
        poster={thumbnailUrl}
        source={{ uri: audioUrl }}
        audioOnly={true}
      />
    </StyledMediaContainer>
  );
};

const styles = StyleSheet.create({
  videoPlayer: {
    flex: 1,
  },
});
