import styled from "styled-components/native";
import { FeedCard } from "../../explore";
import { TapView } from "../../shared";

export const StyledUserPostsTimelineContainer = styled.View`
  padding: 0 10px 0px;
  /* margin-bottom: 150px; */
`;

export const StyledTimlineItemContainer = styled.View`
  /* width: 100%; */
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
`;

export const StyledTimlineRoadContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledTimlineRoad = styled.View`
  height: 250px;
  width: 2px;
  background-color: ${({ theme }) => theme.objectBackgrounds?.primary};
`;

export const StyledPostContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 15px 10px 0 0;
`;

export const StyledPostDateText = styled.Text`
  color: ${({ theme }) => theme.textColors?.primary};
  font-family: ${({ theme }) => theme.fontFamily?.primary};
  font-size: 15px;
  opacity: 0.6;
`;

export const StyledPostImage = styled.Image`
  flex: 1;
  border-radius: 15px;
`;

export const StyledPostImageContainer = styled(TapView)`
  margin: 20px 0 10px;
  height: 220px;
`;

export const StyledPostFeedCard = styled(FeedCard)`
  height: 220px;
  width: 100%;
  resize-mode: contain;
  margin: 15px 10px 5px 0;
`;
