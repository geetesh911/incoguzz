import React, { FC } from "react";
import {
  StyledHeaderContainer,
  StyledHeaderIcon,
  StyledHeaderText,
} from "./styled";

export const Header: FC = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderIcon height={150} />
      <StyledHeaderText>Incoguzz</StyledHeaderText>
    </StyledHeaderContainer>
  );
};
