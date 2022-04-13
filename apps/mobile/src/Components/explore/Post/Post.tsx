import React, { FC } from "react";
import { StyledPostContainer } from "./styled";
import { useAppSelector } from "../../../redux/hooks";
import { Reactions } from "./Reactions";
import { Caption } from "./Caption";
import { PostComponent } from "./PostComponent";
import { PostOutput } from "@incoguzz/graphql";
import { PostHelper } from "./helper";

interface IPostProps {
  post: PostOutput;
  unpauseVideo: boolean;
}

export const Post: FC<IPostProps> = ({ post, unpauseVideo }) => {
  const videoPlayerState = useAppSelector(state => state.app.videoPlayerState);
  return (
    <>
      <StyledPostContainer isFullScreen={videoPlayerState?.isFullScreen}>
        <PostComponent
          url={PostHelper.getPostUrl(post)}
          thumbnailUrl={PostHelper.getPostThumbnailUrl(post)}
          text={post?.textual?.text}
          type={post?.type}
          paused={!unpauseVideo}
          postId={post?.id}
        />
      </StyledPostContainer>
      {!videoPlayerState?.isFullScreen && (
        <>
          <Reactions postId={post?.id} />
          <Caption
            caption={post?.caption || ""}
            postId={Math.random().toString()}
          />
        </>
      )}
    </>
  );
};
