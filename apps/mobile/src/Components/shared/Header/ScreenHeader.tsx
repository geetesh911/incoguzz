import React, { FC } from "react";
import { StyledScreenHeaderContainer, StyledScreenHeading } from "./styled";

interface IScreenHeaderProps {
  heading: string;
}

export const ScreenHeader: FC<IScreenHeaderProps> = ({ heading }) => {
  return (
    <StyledScreenHeaderContainer>
      <StyledScreenHeading>{heading}</StyledScreenHeading>
    </StyledScreenHeaderContainer>
  );
};
