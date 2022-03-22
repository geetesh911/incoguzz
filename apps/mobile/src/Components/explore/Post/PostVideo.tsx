import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import { OnLoadData } from "react-native-video";
import { VideoPlayer } from "../../shared/Video";
import { IMediaProperties } from "../Feed";
import { StyledMediaContainer } from "./styled";

interface IPostVideoProps {
  videoUrl: string;
  thumbnailUrl?: string;
}

export const PostVideo: FC<IPostVideoProps> = ({ videoUrl, thumbnailUrl }) => {
  const [{ height, width }, setVideoProperties] = useState<IMediaProperties>({
    height: 1,
    width: 1,
  });

  const onVideoLoad = (data: OnLoadData) => {
    setVideoProperties({
      height: data.naturalSize.height,
      width: data.naturalSize.width,
    });
  };
  return (
    <StyledMediaContainer height={height} width={width}>
      <VideoPlayer
        resizeMode={"contain"}
        style={styles.videoPlayer}
        onLoad={onVideoLoad}
        poster={
          "https://res.cloudinary.com/geeteshpp/image/upload/v1647496797/Screenshot_2022-03-17_112932_dytkzv.png"
        }
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        }}
        paused={false}
        isFullScreen={true}
      />
    </StyledMediaContainer>
  );
};

const styles = StyleSheet.create({
  videoPlayer: {
    flex: 1,
  },
});
