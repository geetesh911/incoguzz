import React, { FC } from "react";
import { MessagesList } from "../../Components/messages/mesage-list";
import {
  InboxHeader,
  StyledInboxScreenContainer,
} from "../../Components/messages/inbox-header";
import { Suggestions } from "../../Components/messages/suggestions";

export const InboxScreen: FC = () => {
  return (
    <StyledInboxScreenContainer>
      <InboxHeader />
      <Suggestions />
      <MessagesList />
    </StyledInboxScreenContainer>
  );
};
