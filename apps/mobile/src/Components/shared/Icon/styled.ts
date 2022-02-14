import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";

export const StyledRoundIconContainer = styled.View`
  border-radius: 50px;
  background-color: ${({ theme }) => theme?.objectBackgrounds?.light};
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledRoundIcon = styled(Icon)`
  font-size: 20px;
  color: ${({ theme }) => theme?.textColors?.primary};
`;
