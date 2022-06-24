import { useNavigation } from "@react-navigation/native";
import React, { FC, useRef, useState } from "react";
import { BottomTabs, Gallery, IGalleryRef } from "../../Components/add-post";
import AudioRecorder from "../../Components/add-post/audio/AudioRecorder";
import {
  ITextualPostInputRef,
  TextualPostInput,
} from "../../Components/add-post/text";
import { PostUploadScreenNavigationProp } from "../../Navigation";

interface IData {
  id: string;
}

export const ChoosePostScreen: FC = () => {
  const navigation = useNavigation<PostUploadScreenNavigationProp>();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const galleryRef = useRef<IGalleryRef>(null);
  const textPostInputRef = useRef<ITextualPostInputRef>(null);

  const renderItem = ({ item }: { item: IData }) => {
    switch (item.id) {
      case "media":
        return <Gallery ref={galleryRef} />;
      case "audio":
        return <AudioRecorder navigation={navigation} />;
      case "text":
        return <TextualPostInput ref={textPostInputRef} />;
      default:
        return null;
    }
  };

  const data: IData[] = [{ id: "media" }, { id: "text" }, { id: "audio" }];

  return (
    <>
      {renderItem({ item: data[activeIndex] })}
      <BottomTabs
        activeIndex={activeIndex}
        changeActiveIndex={(position: number) => setActiveIndex(position)}
      />
    </>
  );
};
