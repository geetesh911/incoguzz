import styled from "styled-components/native";

export const StyledLoadingContainer = styled.View`
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
