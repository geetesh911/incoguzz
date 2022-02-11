import React, { FC, useMemo, useState } from "react";
import { Image } from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import { Furniture } from "./Feed";
import { PostModal } from "./PostModal";
import { StyledFeedImage } from "./styled";

interface IFeedCardProps {
  item: Furniture;
}

const FeedCard: FC<IFeedCardProps> = ({ item }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <LongPressGestureHandler
        onActivated={() => setOpen(true)}
        onHandlerStateChange={() => setOpen(false)}
        minDurationMs={100}
      >
        <StyledFeedImage
          source={{ uri: item.imgURL }}
          height={randomBool ? 150 : 280}
          resizeMode="cover"
        />
      </LongPressGestureHandler>
      <PostModal open={open} imgUrl={item.imgURL} />
    </>
  );
};

export default FeedCard;
