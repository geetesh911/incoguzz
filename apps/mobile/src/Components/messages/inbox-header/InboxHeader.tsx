import React, { FC } from "react";
import { ScreenHeader } from "../../shared";
import { StyledHeaderContainer } from "./styled";

export const InboxHeader: FC = () => {
  const pageHeading = "Inbox";

  return (
    <StyledHeaderContainer>
      <ScreenHeader heading={pageHeading} />
    </StyledHeaderContainer>
  );
};
