import React, { FC } from "react";
import {
  StyledScreenHeaderContainer,
  StyledScreenHeading,
  StyledScreenSubHeading,
  StyledScreenSubHeadingContainer,
} from "./styled";

interface IScreenHeaderProps {
  heading: string;
  subHeading?: string;
}

export const ScreenHeader: FC<IScreenHeaderProps> = ({
  heading,
  subHeading,
}) => {
  return (
    <StyledScreenHeaderContainer>
      <StyledScreenHeading>{heading}</StyledScreenHeading>
      <StyledScreenSubHeadingContainer>
        {subHeading && (
          <StyledScreenSubHeading>{subHeading}</StyledScreenSubHeading>
        )}
      </StyledScreenSubHeadingContainer>
    </StyledScreenHeaderContainer>
  );
};
