import React, { FC } from "react";
import { StyledPostContainer } from "./styled";
import { useAppSelector } from "../../../redux/hooks";
import { Reactions } from "./Reactions";
import { Caption } from "./Caption";
import { PostComponent } from "./PostComponent";
import { GetPostsOutput } from "@incoguzz/graphql";
import { getPostThumbnailUrl, getPostUrl } from "./helper";

interface IPostProps {
  post: GetPostsOutput;
  unpauseVideo: boolean;
}

export const Post: FC<IPostProps> = ({ post, unpauseVideo }) => {
  const videoPlayerState = useAppSelector(state => state.app.videoPlayerState);
  return (
    <>
      <StyledPostContainer isFullScreen={videoPlayerState?.isFullScreen}>
        <PostComponent
          url={getPostUrl(post)}
          thumbnailUrl={getPostThumbnailUrl(post)}
          text={post?.textual?.text}
          type={post?.type}
          paused={!unpauseVideo}
        />
      </StyledPostContainer>
      {!videoPlayerState?.isFullScreen && (
        <>
          <Reactions />
          <Caption
            caption={post?.caption || ""}
            postId={Math.random().toString()}
          />
        </>
      )}
    </>
  );
};
