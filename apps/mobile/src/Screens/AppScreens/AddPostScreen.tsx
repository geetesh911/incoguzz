import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import {
  LazyPagerView,
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import { BottomTabs } from "../../Components/add-post";
import { Camera } from "../../Components/camera/Camera";
interface IData {
  id: string;
}

export const AddPostScreen: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const keyExtractor = (item: IData, index: number) => `${item?.id}${index}`;

  const renderItem = ({ item }: { item: IData }) => {
    switch (item.id) {
      case "media":
        return <Camera />;
      default:
        return <></>;
    }
  };
  const data: IData[] = [{ id: "media" }, { id: "text" }, { id: "audio" }];

  return (
    <>
      <LazyPagerView
        initialPage={0}
        overdrag={true}
        scrollEnabled={true}
        pageMargin={0}
        orientation="horizontal"
        transitionStyle="scroll"
        showPageIndicator={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.lazyPagerView}
        onPageSelected={(event: PagerViewOnPageSelectedEvent) =>
          setActiveIndex(event?.nativeEvent?.position)
        }
      />

      <BottomTabs activeIndex={activeIndex} />
    </>
  );
};

const styles = StyleSheet.create({
  lazyPagerView: {
    width: "100%",
    flex: 1,
  },
});
