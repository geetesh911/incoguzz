import React, { FC, useState } from "react";
import { PostOutput } from "@incoguzz/graphql";
import { useNavigation } from "@react-navigation/native";
import {
  ImageLoadEventData,
  NativeSyntheticEvent,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";
import {
  TabParamList,
  ExploreScreenNavigationProp,
} from "../../../Navigation/interfaces";
import { getPostThumbnailUrl, getPostUrl } from "../Post";
import { PostIcon } from "../Post/PostIcon";
import { PostModal } from "./PostModal";
import {
  StyledFeedImage,
  StyledFeedImageContainer,
  StyledPostIcon,
} from "./styled";
import { TapAndLongPressGesture } from "../../shared";

interface IFeedCardProps {
  post: PostOutput;
  style?: StyleProp<ViewStyle>;
  postSection: string;
  fixed?: boolean;
  posts: PostOutput[];
  initialIndex: number;
  navigateTo: keyof TabParamList;
  innerRef:
    | React.MutableRefObject<ScrollView | undefined>
    | React.Ref<unknown>
    | React.Ref<unknown>[]
    | undefined;
}

const POTRAIT_IMAGE_HEIGHT = 260;
const LANDSCAPE_IMAGE_HEIGHT = POTRAIT_IMAGE_HEIGHT / 2 - 5;

export const FeedCard: FC<IFeedCardProps> = ({
  post,
  posts,
  initialIndex,
  style,
  postSection,
  navigateTo,
  fixed,
  innerRef,
}) => {
  const navigation = useNavigation<ExploreScreenNavigationProp>();

  const [open, setOpen] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<number>(0);

  const onImageLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { height, width } = event?.nativeEvent?.source;
    setAspectRatio(height / width);
  };

  const handlePostPress = () => {
    navigation.navigate(navigateTo, {
      fixed: fixed || false,
      heading: postSection,
      initialIndex,
      posts,
    });
  };

  return (
    <>
      <TapAndLongPressGesture
        onLongPress={() => setOpen(true)}
        onLongPressOver={() => setOpen(false)}
        onPress={handlePostPress}
        simultaneousHandlers={innerRef}
      >
        <StyledFeedImageContainer
          height={
            aspectRatio <= 1 ? LANDSCAPE_IMAGE_HEIGHT : POTRAIT_IMAGE_HEIGHT
          }
          style={style}
        >
          <StyledFeedImage
            source={{ uri: getPostThumbnailUrl(post) }}
            height={
              aspectRatio <= 1 ? LANDSCAPE_IMAGE_HEIGHT : POTRAIT_IMAGE_HEIGHT
            }
            resizeMode="cover"
            onLoad={onImageLoad}
          />
          <StyledPostIcon>
            <PostIcon type={post?.type} />
          </StyledPostIcon>
        </StyledFeedImageContainer>
      </TapAndLongPressGesture>
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
