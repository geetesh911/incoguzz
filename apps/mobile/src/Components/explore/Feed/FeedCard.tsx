import React, { FC, useMemo, useState } from "react";
import { Alert, ScrollView } from "react-native";
import {
  LongPressGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { Furniture } from "./Feed";
import { PostModal } from "./PostModal";
import { StyledFeedImage } from "./styled";

interface IFeedCardProps {
  item: Furniture;
  innerRef: React.MutableRefObject<ScrollView | undefined>;
}

const FeedCard: FC<IFeedCardProps> = ({ item, innerRef }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <LongPressGestureHandler
        onActivated={() => setOpen(true)}
        onHandlerStateChange={() => setOpen(false)}
        minDurationMs={100}
      >
        <TapGestureHandler
          simultaneousHandlers={innerRef}
          onActivated={() => Alert.alert("hello")}
          maxDurationMs={3000}
        >
          <StyledFeedImage
            source={{ uri: item.imgURL }}
            height={randomBool ? 150 : 280}
            resizeMode="cover"
          />
        </TapGestureHandler>
      </LongPressGestureHandler>
      <PostModal open={open} imgUrl={item.imgURL} />
    </>
  );
};

export default FeedCard;
