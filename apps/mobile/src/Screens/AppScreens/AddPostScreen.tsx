import React, { FC, useState } from "react";
import {
  BottomTabs,
  Gallery,
  AddPostHeader,
  AudioRecorder,
} from "../../Components/add-post";
import { TextualPostInput } from "../../Components/add-post/text";

interface IData {
  id: string;
}

export const AddPostScreen: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderItem = ({ item }: { item: IData }) => {
    switch (item.id) {
      case "media":
        return <Gallery />;
      case "audio":
        return <AudioRecorder />;
      case "text":
        return <TextualPostInput />;
      default:
        return null;
    }
  };
  const data: IData[] = [{ id: "media" }, { id: "text" }, { id: "audio" }];

  return (
    <>
      <AddPostHeader />
      {renderItem({ item: data[activeIndex] })}
      <BottomTabs
        activeIndex={activeIndex}
        changeActiveIndex={(position: number) => setActiveIndex(position)}
      />
    </>
  );
};
