import { useNavigation } from "@react-navigation/native";
import React, { FC, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import {
  LongPressGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { RouteNames } from "../../../Navigation/constants";
import { ExploreScreenNavigationProp } from "../../../Navigation/interfaces";
import { Furniture } from "./Feed";
import { PostModal } from "./PostModal";
import { StyledFeedImage } from "./styled";

interface IFeedCardProps {
  item: Furniture;
  innerRef: React.MutableRefObject<ScrollView | undefined>;
}

const FeedCard: FC<IFeedCardProps> = ({ item, innerRef }) => {
  const navigation = useNavigation<ExploreScreenNavigationProp>();

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
          onActivated={() => navigation.navigate(RouteNames.Post)}
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
