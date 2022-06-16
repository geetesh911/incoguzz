import React, { FC, useState } from "react";
import { BottomTabs, Gallery, AddPostHeader } from "../../Components/add-post";
import { TextualPostInput } from "../../Components/add-post/text";
import { Camera } from "../../Components/camera/Camera";

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
        return <Camera />;
      case "text":
        return <TextualPostInput />;
      default:
        return <></>;
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
