import React, { FC, useMemo, useState } from "react";
import { Image } from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";

interface IFeedCardProps {
  item: any;
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
        <Image
          source={{ uri: item.imgURL }}
          style={{
            height: randomBool ? 150 : 280,
            alignSelf: "stretch",
            margin: 5,
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
      </LongPressGestureHandler>
      {/* <IModal open={open} imgUrl={item.imgURL} /> */}
    </>
  );
};

export default FeedCard;
