import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const StyledScreenHeaderContainer = styled.Text`
  padding: 30px 5px 15px;
`;
export const StyledScreenHeading = styled.Text`
  font-size: 35px;
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  color: ${({ theme }) => theme?.textColors?.primary};
`;

export const StyledPageHeader = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 50px;
  /* margin-top: 20px; */
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
`;

export const StyledPageText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme?.textColors?.primary};
  font-family: ${({ theme }) => theme?.fontFamily?.primary};
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const StyledBackIconContainer = styled.Pressable`
  position: absolute;
  left: 5px;
  z-index: 2;
  background-color: transparent;
`;

export const StyledBackIcon = styled(Icon)`
  color: ${({ theme }) => theme?.textColors?.primary};
  font-size: 20px;
  padding: 0 10px;
`;
