import styled from "styled-components/native";

interface IMasonaryListContainer {
  horizontal: boolean;
}

interface IMasonaryListItemContainer extends IMasonaryListContainer {
  numColumns: number;
}

export const StyledMasonaryListContainer = styled.View<IMasonaryListContainer>`
  display: flex;
  flex: 1;
  flex-direction: ${({ horizontal }) => (horizontal ? "column" : "row")};
`;

export const StyledMasonaryListItemContainer = styled.View<IMasonaryListItemContainer>`
  display: flex;
  flex: ${({ numColumns }) => 1 / numColumns};
  flex-direction: ${({ horizontal }) => (horizontal ? "column" : "row")};
`;
