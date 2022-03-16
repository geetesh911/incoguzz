import React, { FC, useState } from "react";
import Video, { OnLoadData } from "react-native-video";
import { IMediaProperties } from "../Feed";
import { StyledMediaContainer } from "./styled";

interface IPostVideoProps {
  videoUrl: string;
}

export const PostVideo: FC<IPostVideoProps> = ({ videoUrl }) => {
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
      <Video
        resizeMode={"contain"}
        style={{ flex: 1 }}
        onLoad={onVideoLoad}
        poster={
          "https://res.cloudinary.com/geeteshpp/image/upload/v1644933320/0fdddf59-419f-4479-8658-1e6ab58bfc9f_62b34b08-0562-4d59-a61f-f7344c80cc9aRW20seconds_1_thumbnail_xth8dk.jpg"
        }
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        }}
      />
    </StyledMediaContainer>
  );
};
