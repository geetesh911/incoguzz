import React, { FC } from "react";
import { StyledPostContainer } from "./styled";
import { useAppSelector } from "../../../redux/hooks";
import { FullScreenVideoPlayer } from "../../shared/Video";
import { Reactions } from "./Reactions";
import { Caption } from "./Caption";
import { PostComponent } from "./PostComponent";
import { GetAllPostsOutput } from "@incoguzz/graphql";
import { getPostThumbnailUrl, getPostUrl } from "./helper";

interface IPostProps {
  post: GetAllPostsOutput;
  unpauseVideo: boolean;
}

export const Post: FC<IPostProps> = ({ post, unpauseVideo }) => {
  const videoPlayerState = useAppSelector(state => state.app.videoPlayerState);
  return (
    <>
      {!videoPlayerState?.isFullScreen ? (
        <>
          <StyledPostContainer>
            <PostComponent
              url={getPostUrl(post)}
              thumbnailUrl={getPostThumbnailUrl(post)}
              text={post?.textual?.text}
              type={post?.type}
              paused={!unpauseVideo}
            />
          </StyledPostContainer>
          <Reactions />
          <Caption caption={post?.caption || ""} />
        </>
      ) : (
        <FullScreenVideoPlayer />
      )}
    </>
  );
};
