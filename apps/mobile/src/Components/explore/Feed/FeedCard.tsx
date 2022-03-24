import { GetAllPostsOutput } from "@incoguzz/graphql";
import { setSelectedPost } from "@incoguzz/redux";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import {
  LongPressGestureHandler,
  State,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { RouteNames } from "../../../Navigation/constants";
import { ExploreScreenNavigationProp } from "../../../Navigation/interfaces";
import { useAppDispatch } from "../../../redux/hooks";
import { getPostThumbnailUrl, getPostUrl } from "../Post";
import { PostModal } from "./PostModal";
import { StyledFeedImage } from "./styled";

interface IFeedCardProps {
  post: GetAllPostsOutput;
  innerRef: React.MutableRefObject<ScrollView | undefined>;
}

const FeedCard: FC<IFeedCardProps> = ({ post, innerRef }) => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<ExploreScreenNavigationProp>();

  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const [open, setOpen] = useState<boolean>(false);

  const handlePostPress = () => {
    dispatch(setSelectedPost(post));
    navigation.navigate(RouteNames.Post);
  };

  return (
    <>
      <LongPressGestureHandler
        onActivated={() => setOpen(true)}
        onHandlerStateChange={event => {
          if (
            event?.nativeEvent?.state === State.END ||
            event?.nativeEvent?.state === State.CANCELLED
          )
            setOpen(false);
        }}
        minDurationMs={100}
        maxDist={10000}
      >
        <TapGestureHandler
          simultaneousHandlers={innerRef}
          onActivated={handlePostPress}
          maxDurationMs={3000}
        >
          <StyledFeedImage
            source={{ uri: getPostThumbnailUrl(post) }}
            height={randomBool ? 150 : 280}
            resizeMode="cover"
          />
        </TapGestureHandler>
      </LongPressGestureHandler>
      <PostModal
        open={open}
        url={getPostUrl(post)}
        thumbnailUrl={getPostThumbnailUrl(post)}
        type={post.type}
        text={post?.textual?.text}
      />
    </>
  );
};

export default FeedCard;
