import { PostType } from "@incoguzz/graphql";
import { setPostText, setPostUrl, setPostType } from "@incoguzz/redux";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useRef, useState } from "react";
import {
  BottomTabs,
  Gallery,
  AddPostHeader,
  // AudioRecorder,
  IGalleryRef,
} from "../../Components/add-post";
import AudioRecorder from "../../Components/add-post/audio/AudioRecorder";
import {
  ITextualPostInputRef,
  TextualPostInput,
} from "../../Components/add-post/text";
import { PostUploadScreenNavigationProp, RouteNames } from "../../Navigation";
import { useAppDispatch } from "../../redux/hooks";

interface IData {
  id: string;
}

export const ChoosePostScreen: FC = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<PostUploadScreenNavigationProp>();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const galleryRef = useRef<IGalleryRef>(null);
  const textPostInputRef = useRef<ITextualPostInputRef>(null);

  const renderItem = ({ item }: { item: IData }) => {
    switch (item.id) {
      case "media":
        return <Gallery ref={galleryRef} />;
      case "audio":
        return <AudioRecorder />;
      case "text":
        return <TextualPostInput ref={textPostInputRef} />;
      default:
        return null;
    }
  };

  const data: IData[] = [{ id: "media" }, { id: "text" }, { id: "audio" }];

  const onSubmit = () => {
    switch (data[activeIndex].id) {
      case "media":
        if (galleryRef.current?.getMediaType() === "Photos") {
          dispatch(setPostUrl(galleryRef.current?.getImages()));
          dispatch(setPostType(PostType.Photo));
          break;
        }
        dispatch(setPostUrl([galleryRef.current?.getVideo() as string]));
        dispatch(setPostType(PostType.Video));
        break;

      case "audio":
        dispatch(setPostType(PostType.Audio));
        break;

      case "text":
        dispatch(setPostText(textPostInputRef.current?.getTextInput()));
        dispatch(setPostType(PostType.Textual));
        break;

      default:
        break;
    }
    navigation.navigate(RouteNames.PostUpload);
  };

  return (
    <>
      <AddPostHeader onSubmit={onSubmit} />
      {renderItem({ item: data[activeIndex] })}
      <BottomTabs
        activeIndex={activeIndex}
        changeActiveIndex={(position: number) => setActiveIndex(position)}
      />
    </>
  );
};
