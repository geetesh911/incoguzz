import React, { FC } from "react";
import { InputWithIcon } from "../form";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { StyledExploreSearchContainer } from "./Feed/styled";

export const ExploreSearch: FC = () => {
  return (
    <StyledExploreSearchContainer>
      <InputWithIcon
        icon={<RightArrowIcon height={17} width={17} />}
        value=""
        placeholder="Find something fun"
        onChange={() => null}
        name="search"
        disableErrorMsg
      />
    </StyledExploreSearchContainer>
  );
};

export default ExploreSearch;
