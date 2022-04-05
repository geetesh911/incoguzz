import { FlatList } from "react-native-gesture-handler";
import React, { FC, useRef } from "react";
import { useQuery } from "@apollo/client";
import {
  GetPostsOutput,
  GetUserPostsDocument,
  GetUserPostsQuery,
  GetUserPostsQueryVariables,
} from "@incoguzz/graphql";
import { ListRenderItemInfo, ScrollView } from "react-native";
import {
  StyledTimlineItemContainer,
  StyledTimlineRoadContainer,
  StyledTimlineRoad,
  StyledPostContainer,
  StyledPostDateText,
  StyledUserPostsTimelineContainer,
  StyledPostFeedCard,
} from "./styled";
import { TimelineStopIcon } from "../../icons/TimelineStopIcon";
import { ScreenHeader } from "../../shared";
import { DateHelper } from "../../../helpers";
import { RouteNames } from "../../../Navigation/constants";

export const UserPostsTimeline: FC = () => {
  const { data } = useQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(
    GetUserPostsDocument,
  );

  const scrollHandler = useRef<ScrollView>();

  const renderItem = ({
    item: post,
    index,
  }: ListRenderItemInfo<GetPostsOutput>) => {
    return (
      <StyledTimlineItemContainer>
        <StyledTimlineRoadContainer>
          <TimelineStopIcon />
          <StyledTimlineRoad />
        </StyledTimlineRoadContainer>
        <StyledPostContainer>
          <StyledPostDateText>
            {`Posted ${DateHelper.dateDifference(post?.createdAt)} ago`}
          </StyledPostDateText>
          <StyledPostFeedCard
            postSection="Posts"
            innerRef={scrollHandler}
            key={post.id}
            post={post}
            posts={(data?.getUserPosts as GetPostsOutput[]) || []}
            initialIndex={index}
            navigateTo={RouteNames.UserPost}
          />
        </StyledPostContainer>
      </StyledTimlineItemContainer>
    );
  };
  return (
    <StyledUserPostsTimelineContainer>
      <FlatList
        ListHeaderComponent={<ScreenHeader heading="Timeline" />}
        data={(data?.getUserPosts as GetPostsOutput[]) || []}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </StyledUserPostsTimelineContainer>
  );
};
