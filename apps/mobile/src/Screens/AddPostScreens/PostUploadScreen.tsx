import React, { FC, useRef } from "react";
import { useAppSelector } from "../../redux/hooks";
import { FileUtil } from "../../utils/file.util";
import { useMutation } from "@apollo/client";
import {
  AddAudioPostDocument,
  AddAudioPostMutation,
  AddAudioPostMutationVariables,
  AddPhotoPostDocument,
  AddPhotoPostMutation,
  AddPhotoPostMutationVariables,
  AddTextualPostDocument,
  AddTextualPostMutation,
  AddTextualPostMutationVariables,
  AddVideoPostDocument,
  AddVideoPostMutation,
  AddVideoPostMutationVariables,
  PostType,
} from "@incoguzz/graphql";
import {
  AddPostHeader,
  CaptionInput,
  ICaptionInputRef,
} from "../../Components/add-post";

const PostUploadScreen: FC = () => {
  const captionInputRef = useRef<ICaptionInputRef>(null);

  const postUrl = useAppSelector(state => state.post.postUrl);
  const postText = useAppSelector(state => state.post.postText);
  const postType = useAppSelector(state => state.post.postType);

  const [uploadPhotoPost, { loading: photoLoading }] = useMutation<
    AddPhotoPostMutation,
    AddPhotoPostMutationVariables
  >(AddPhotoPostDocument);
  const [uploadVideoPost, { loading: videoLoading }] = useMutation<
    AddVideoPostMutation,
    AddVideoPostMutationVariables
  >(AddVideoPostDocument);
  const [uploadAudioPost, { loading: audioLoading, error }] = useMutation<
    AddAudioPostMutation,
    AddAudioPostMutationVariables
  >(AddAudioPostDocument);
  const [uploadTextualPost, { loading: textualLoading }] = useMutation<
    AddTextualPostMutation,
    AddTextualPostMutationVariables
  >(AddTextualPostDocument);

  console.log(postUrl, JSON.stringify(error));

  const media =
    postUrl?.map(url =>
      FileUtil.generateRNFile({
        uri: url,
        name: url,
      }),
    ) || undefined;

  const uploadPost = async () => {
    const tags = captionInputRef.current?.getTags();
    const caption = captionInputRef.current?.getCaption();

    switch (postType) {
      case PostType.Photo:
        await uploadPhotoPost({
          variables: {
            addMediaPostInput: { type: PostType.Photo, caption, tags },
            media,
          },
        });
        break;
      case PostType.Video:
        await uploadVideoPost({
          variables: {
            addMediaPostInput: {
              type: PostType.Video,
              caption,
              tags,
            },
            media,
          },
        });
        break;
      case PostType.Audio:
        await uploadAudioPost({
          variables: {
            addMediaPostInput: {
              type: PostType.Audio,
              caption,
              tags,
            },
            media,
          },
        });
        break;
      case PostType.Textual:
        await uploadTextualPost({
          variables: {
            addTextualPost: { type: PostType.Textual, text: postText, tags },
          },
        });
        break;
    }
  };

  return (
    <>
      <AddPostHeader
        onSubmit={uploadPost}
        loading={photoLoading || videoLoading || textualLoading || audioLoading}
      />
      <CaptionInput ref={captionInputRef} />
    </>
  );
};

export default PostUploadScreen;
