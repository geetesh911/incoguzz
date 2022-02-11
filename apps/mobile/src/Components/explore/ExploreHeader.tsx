import React, { FC } from "react";
import { InputWithIcon } from "../form";
import { ScreenHeader } from "../shared";
import { StyledExploreHeaderContainer, StyledSearchIcon } from "./Feed/styled";

export const ExploreHeader: FC = () => {
  return (
    <StyledExploreHeaderContainer>
      <ScreenHeader heading="Explore" />
      <InputWithIcon
        icon={<StyledSearchIcon name="search" size={14} />}
        value=""
        placeholder="Search"
        onChange={() => null}
        name="search"
      />
    </StyledExploreHeaderContainer>
  );
};
