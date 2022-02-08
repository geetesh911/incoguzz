import styled from "styled-components/native";

export const StyledBottomMenuContainer = styled.View`
  height: 78px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme?.backgrounds?.primary};
`;

export const StyledMenuItem = styled.Pressable`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
