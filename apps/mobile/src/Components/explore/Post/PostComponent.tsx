import React, { FC } from "react";
import { PostType } from "@incoguzz/graphql";
import { RequireAtLeastOne } from "type-fest";
import { PostAudio } from "./PostAudio";
import { PostText } from "./PostText";
import { PostVideo } from "./PostVideo";
import { PostImageCarousel } from "./PostImageCarousel";

export interface IPostComponent {
  url: string | string[];
  text: string;
  type: PostType;
  thumbnailUrl: string;
  paused?: boolean;
  postId: string;
}

export type IPostComponentProps = RequireAtLeastOne<
  IPostComponent,
  "url" | "text"
>;

export const PostComponent: FC<IPostComponentProps> = ({
  url,
  thumbnailUrl,
  text,
  type,
  paused,
}) => {
  const Component: Record<PostType, JSX.Element | null> = {
    [PostType.Photo]: (
      <PostImageCarousel imgUrls={Array.isArray(url) ? url : [url as string]} />
    ),
    [PostType.Video]: (
      <PostVideo
        videoUrl={url as string}
        paused={paused}
        thumbnailUrl={thumbnailUrl}
      />
    ),
    [PostType.Audio]: (
      <PostAudio
        audioUrl={url as string}
        thumbnailUrl={thumbnailUrl}
        paused={paused}
      />
    ),
    [PostType.Textual]: <PostText text={text as string} />,
    [PostType.Clip]: null,
    [PostType.Poll]: null,
  };

  return Component[type] || null;
};
