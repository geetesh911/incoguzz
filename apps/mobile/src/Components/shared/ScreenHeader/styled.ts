import styled from "styled-components/native";

export const StyledScreenHeaderContainer = styled.Text`
  padding: 30px 5px 15px;
`;
export const StyledScreenHeading = styled.Text`
  font-size: 35px;
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  color: ${({ theme }) => theme?.textColors?.primary};
`;
