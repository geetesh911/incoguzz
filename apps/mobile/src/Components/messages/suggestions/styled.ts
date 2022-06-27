import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { TapView } from "../../shared";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const windowWidth = Dimensions.get("window").width;

export const StyledSuggestionsContainer = styled.Text`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`;

export const StyledSuggestionTextContainer = styled.View`
  width: ${windowWidth}px;
`;

export const StyledSuggestionHeading = styled.Text`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  color: ${({ theme }) => theme?.textColors?.primary};
`;

export const StyledUserContainer = styled.View`
  height: 90px;
  width: ${windowWidth - 30}px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const StyledUserImageContainer = styled(TapView)`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme?.objectBackgrounds?.primary};
  border-radius: 25px;
`;

export const StyledUserImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const StyledAddUserIcon = styled(MaterialIcon)`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 20px;
`;
