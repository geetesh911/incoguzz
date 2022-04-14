import { useMutation } from "@apollo/client";
import {
  BookmarkPostDocument,
  BookmarkPostMutation,
  BookmarkPostMutationVariables,
} from "@incoguzz/graphql";
import React, { FC } from "react";
import { StyledBookmarkButton, StyledPostInnerHeaderContainer } from "./styled";
import { BookmarkIcon } from "../../icons";
import { FilledBookmarkIcon } from "../../icons/FilledBookmarkIcon";
import { PageHeader } from "../../shared";

interface IPostHeaderProps {
  heading: string;
  postId: string;
  bookmarked?: boolean;
}

export const PostHeader: FC<IPostHeaderProps> = ({
  heading,
  postId,
  bookmarked,
}) => {
  const [bookmarkPostMutation, { data }] = useMutation<
    BookmarkPostMutation,
    BookmarkPostMutationVariables
  >(BookmarkPostDocument);

  const bookmarkPost = async () => {
    await bookmarkPostMutation({ variables: { postId } });
  };

  return (
    <StyledPostInnerHeaderContainer>
      <PageHeader text={heading} />
      <StyledBookmarkButton onPress={bookmarkPost}>
        {(data?.bookmarkPost?.bookmarked &&
          data?.bookmarkPost?.postId === postId) ||
        bookmarked ? (
          <FilledBookmarkIcon height={23} width={23} />
        ) : (
          <BookmarkIcon height={23} width={23} />
        )}
      </StyledBookmarkButton>
    </StyledPostInnerHeaderContainer>
  );
};
