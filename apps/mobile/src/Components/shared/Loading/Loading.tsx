import React, { FC } from "react";
import { LoadingIcon } from "./LoadingIcon";
import { StyledLoadingContainer } from "./styled";

export const Loading: FC = () => {
  return (
    <StyledLoadingContainer>
      <LoadingIcon />
    </StyledLoadingContainer>
  );
};
