import React, { FC, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import { PostOutput, PostType } from "@incoguzz/graphql";
import { RouteNames } from "../../../Navigation/constants";
import { FeedCard } from "../../explore";

export const postsData1 = {
  getAllPosts: [
    {
      __typename: "PostOutput",
      id: "ckzsgnpeq11426otqbge5x4kh",
      caption:
        "Steel Computer Belarus Wooden Planner indexing navigating Designer Loan Tasty",
      type: PostType.Photo,
      createdAt: "2022-02-18T13:41:36.482Z",
      updatedAt: "2022-02-18T13:41:36.482Z",
      tags: [
        {
          __typename: "Tag",
          id: "ckzsg52ht0335xktq5wh42y4a",
          name: "Rubber",
        },
      ],
      place: null,
      poll: null,
      photos: [
        {
          __typename: "Photo",
          id: "ckzsgnpeq11476otq4tunhja7",
          url: "http://placeimg.com/1920/1280",
        },
        {
          __typename: "Photo",
          id: "ckzsgnpeq11486otqvgiro2qb",
          url: "http://placeimg.com/1280/760",
        },
        {
          __typename: "Photo",
          id: "ckzsgnpeq11496otqnhcunw6l",
          url: "http://placeimg.com/1280/760",
        },
      ],
      video: null,
      clip: null,
      textual: null,
      audio: null,
      _count: null,
    },
    {
      __typename: "PostOutput",
      id: "ckzsgnpeq11296otq0efgchdk",
      caption: null,
      type: PostType.Textual,
      createdAt: "2022-02-18T13:41:36.482Z",
      updatedAt: "2022-02-18T13:41:36.482Z",
      tags: [
        {
          __typename: "Tag",
          id: "ckzsgnpeq11366otqkhj371qt",
          name: "EXE",
        },
        {
          __typename: "Tag",
          id: "ckzsgnpeq11396otqcs7e1qf1",
          name: "out-of-the-box",
        },
      ],
      place: null,
      poll: null,
      photos: [],
      video: null,
      clip: null,
      textual: {
        __typename: "Textual",
        id: "ckzsgnpeq11416otq20as72mg",
        text: "Earum suscipit veritatis neque harum ipsa.\nIncidunt animi sapiente aliquam ad blanditiis earum quia est.",
      },
      audio: null,
      _count: null,
    },
    {
      __typename: "PostOutput",
      id: "ckzsgnpeq11266otqppeuxcjr",
      caption: null,
      type: PostType.Textual,
      createdAt: "2022-02-18T13:41:36.482Z",
      updatedAt: "2022-02-18T13:41:36.482Z",
      tags: [
        {
          __typename: "Tag",
          id: "ckzsg52ht0340xktq9aa65qs6",
          name: "customer",
        },
        {
          __typename: "Tag",
          id: "ckzsgnpeq11276otq03kbqto7",
          name: "Oman",
        },
        {
          __typename: "Tag",
          id: "ckzsghblb0202bstqkn79tb3a",
          name: "override",
        },
      ],
      place: null,
      poll: null,
      photos: [],
      video: null,
      clip: null,
      textual: {
        __typename: "Textual",
        id: "ckzsgnpeq11346otqw90052ae",
        text: "Ut provident incidunt voluptatem inventore esse.\nImpedit blanditiis laudantium cupiditate hic animi dolore.\nOmnis voluptatem voluptatem.",
      },
      audio: null,
      _count: null,
    },
    {
      __typename: "PostOutput",
      id: "ckzsgnpbg10516otq412nni5q",
      caption:
        "overriding bandwidth CFA Ball open-source Rubber Small Supervisor flexibility Movies",
      type: PostType.Video,
      createdAt: "2022-02-18T13:41:36.364Z",
      updatedAt: "2022-02-18T13:41:36.364Z",
      tags: [
        {
          __typename: "Tag",
          id: "ckzsgcy0l0226fotqonh968lf",
          name: "Soft",
        },
        {
          __typename: "Tag",
          id: "ckzsghg3g0911bstqugmlm38q",
          name: "state",
        },
      ],
      place: null,
      poll: null,
      photos: [],
      video: {
        __typename: "Video",
        id: "ckzsgnpbg10616otqzr26gg1j",
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        thumbnailUrl: "http://placeimg.com/1920/1280",
      },
      clip: null,
      textual: null,
      audio: null,
      _count: null,
    },
    {
      __typename: "PostOutput",
      id: "ckzsgnpbg10466otqj04uiqom",
      caption:
        "Cliffs Orchestrator Infrastructure Card Chief disintermediate Soap Wooden CSS Kwacha",
      type: PostType.Photo,
      createdAt: "2022-02-18T13:41:36.364Z",
      updatedAt: "2022-02-18T13:41:36.364Z",
      tags: [
        {
          __typename: "Tag",
          id: "ckzsgnpbg10526otq5zdcpa4n",
          name: "Grocery",
        },
        {
          __typename: "Tag",
          id: "ckzsghblb0202bstqkn79tb3a",
          name: "override",
        },
      ],
      place: null,
      poll: null,
      photos: [
        {
          __typename: "Photo",
          id: "ckzsgnpbg10546otq8adkkmx3",
          url: "http://placeimg.com/1280/1280",
        },
        {
          __typename: "Photo",
          id: "ckzsgnpbg10556otqo2icjclw",
          url: "http://placeimg.com/1920/1920",
        },
        {
          __typename: "Photo",
          id: "ckzsgnpbg10566otq2q402cwm",
          url: "http://placeimg.com/1280/1280",
        },
      ],
      video: null,
      clip: null,
      textual: null,
      audio: null,
      _count: null,
    },
    {
      __typename: "PostOutput",
      id: "ckzsgnpbg10406otqpacwqdx9",
      caption:
        "workforce Expanded Optimization moratorium Mobility calculate e-business HTTP networks Jamaican",
      type: PostType.Photo,
      createdAt: "2022-02-18T13:41:36.364Z",
      updatedAt: "2022-02-18T13:41:36.364Z",
      tags: [
        {
          __typename: "Tag",
          id: "ckzsg13bz0654xwtqlagpc55y",
          name: "Awesome",
        },
        {
          __typename: "Tag",
          id: "ckzsgnpbg10416otqj9vkscku",
          name: "New",
        },
      ],
      place: null,
      poll: null,
      photos: [
        {
          __typename: "Photo",
          id: "ckzsgnpbg10456otq64404w1x",
          url: "http://placeimg.com/1920/1280",
        },
        {
          __typename: "Photo",
          id: "ckzsgnpbg10476otqkc587u7m",
          url: "http://placeimg.com/1280/1920",
        },
        {
          __typename: "Photo",
          id: "ckzsgnpbg10486otq31h3orsa",
          url: "http://placeimg.com/1280/760",
        },
      ],
      video: null,
      clip: null,
      textual: null,
      audio: null,
      _count: null,
    },
  ],
};

export const UserPostsBody: FC = () => {
  const scrollHandler = useRef<ScrollView>();

  const renderItem = ({ item: post, i }: { item: PostOutput; i: number }) => {
    return (
      <FeedCard
        postSection="Bookmarks"
        innerRef={scrollHandler}
        key={post.id}
        post={post}
        posts={(postsData1?.getAllPosts as PostOutput[]) || []}
        initialIndex={i}
        navigateTo={RouteNames.BookmarksPost}
      />
    );
  };

  return (
    <MasonryList
      innerRef={scrollHandler}
      contentContainerStyle={styles.masonryList}
      numColumns={2}
      data={postsData1?.getAllPosts || []}
      loading={false}
      renderItem={renderItem}
      onRefresh={() => console.log("refresh")}
      onEndReached={() => null}
      onEndReachedThreshold={0.2}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  masonryList: {
    paddingHorizontal: 10,
    alignSelf: "stretch",
  },
});
