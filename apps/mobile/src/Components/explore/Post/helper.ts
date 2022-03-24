import { GetAllPostsOutput, PostType } from "@incoguzz/graphql";
import { defalutPostImages } from "../../../constants/defaultImages";

export const getPostUrl = (post: GetAllPostsOutput) => {
  const postUrl: Record<PostType, string | string[]> = {
    [PostType.Photo]: post?.photos
      ? post?.photos?.map(photo => photo?.url)
      : "",
    [PostType.Video]: post?.video ? post?.video?.url : "",
    [PostType.Audio]: post?.audio && post?.audio?.url ? post?.audio?.url : "",
    [PostType.Textual]: defalutPostImages[post.type],
    [PostType.Clip]: "",
    [PostType.Poll]: "",
  };

  return postUrl[post.type];
};
export const getPostThumbnailUrl = (post: GetAllPostsOutput) => {
  const postThumbnailUrl: Record<PostType, string> = {
    [PostType.Photo]: post?.photos ? post?.photos[0]?.url : "",
    [PostType.Video]: post?.video ? post?.video?.thumbnailUrl : "",
    [PostType.Audio]:
      post?.audio && post?.audio?.thumbnailUrl
        ? post?.audio?.thumbnailUrl
        : defalutPostImages[post.type],
    [PostType.Textual]: defalutPostImages[post.type],
    [PostType.Clip]: "",
    [PostType.Poll]: "",
  };
  return postThumbnailUrl[post.type];
};