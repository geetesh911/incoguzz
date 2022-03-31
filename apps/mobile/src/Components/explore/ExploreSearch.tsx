import React, { FC } from "react";
import { InputWithIcon } from "../form";
import { StyledExploreSearchContainer, StyledSearchIcon } from "./Feed";

export const ExploreSearch: FC = () => {
  return (
    <StyledExploreSearchContainer>
      <InputWithIcon
        icon={<StyledSearchIcon name="search" size={16} />}
        value=""
        placeholder="Search"
        onChange={() => null}
        name="search"
        disableErrorMsg
      />
    </StyledExploreSearchContainer>
  );
};

export default ExploreSearch;
