import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { TapView } from "../../shared";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const StyledMessagesView = styled.View`
  height: ${windowHeight - 78 - 50 - 25 - 90 - 25 - 40}px;
  margin-bottom: 80px;
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
`;

export const StyledMessagesList = styled.FlatList`
  height: ${windowHeight - 78 - 50 - 25 - 90 - 25 - 40}px;
  margin-bottom: 80px;
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
`;

export const StyledMessagesHeading = styled.Text`
  width: 100%;
  font-size: 16px;
  margin: 0px 15px 10px;
  font-weight: bold;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  color: ${({ theme }) => theme?.textColors?.primary};
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
`;

export const StyledMessageItemContainer = styled(TapView)`
  height: 70px;
  width: ${windowWidth}px;
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
`;

export const StyledUserIconContainer = styled.View`
  width: 70px;
`;

export const StyledUserIcon = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const StyledMessageDetailsContainer = styled.View`
  flex: 1;
  height: 100%;
  padding: 0 5px;
`;

export const StyledUserName = styled.Text`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  color: ${({ theme }) => theme?.textColors?.primary};
`;

export const StyledUserMessage = styled.Text`
  width: 100%;
  font-size: 16px;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  color: ${({ theme }) => theme?.textColors?.inactive};
`;

export const StyledTimeDetailsContainer = styled.View`
  width: 40px;
  height: 100%;
  margin-left: 10px;
  display: flex;
`;

export const StyledTimeDetailsText = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  color: ${({ theme }) => theme?.textColors?.inactive};
`;
