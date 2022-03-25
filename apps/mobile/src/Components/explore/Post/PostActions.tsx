import React, { FC } from "react";
import { BookmarkIcon } from "../../icons/BookmarkIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import {
  StyledPostActionsContainer,
  StyledPostActionTextButton,
  StyledPostActionButtonText,
  StyledPostActionIconButton,
} from "./styled";

export const PostActions: FC = () => {
  return (
    <StyledPostActionsContainer>
      <StyledPostActionTextButton>
        <StyledPostActionButtonText>
          Check User Posts
        </StyledPostActionButtonText>
      </StyledPostActionTextButton>
      <StyledPostActionIconButton>
        <BookmarkIcon height={20} width-={20} />
      </StyledPostActionIconButton>
      <StyledPostActionIconButton>
        <ShareIcon height={20} width-={20} />
      </StyledPostActionIconButton>
    </StyledPostActionsContainer>
  );
};

export default PostActions;
