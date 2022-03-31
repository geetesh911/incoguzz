import React, { FC, useState } from "react";
import { FullScreenImage } from "../../shared";
import {
  StyledUserDetailsContainer,
  StyledUserDp,
  StyledUserDpContainer,
  StyledUserHeaderContainer,
  StyledUserName,
  StyledUserTextButton,
  StyledUserTextButtonText,
} from "./styled";
import {
  GetUserQuery,
  GetUserQueryVariables,
  GetUserDocument,
} from "@incoguzz/graphql";
import { useQuery } from "@apollo/client";
import { UserHeaderContentLoader } from "./UserHeaderContentLoader";

export const UserHeader: FC = () => {
  const { data: userData, loading: userDataLoading } = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(GetUserDocument);

  const [isDpFullScreen, setIsDpFullScreen] = useState<boolean>(false);

  const displayDpFullScreen = () => {
    setIsDpFullScreen(true);
  };
  const closeDpFullScreen = () => {
    setIsDpFullScreen(false);
  };

  const dpUrl =
    userData?.getUser?.profile?.dpUrl ||
    "https://res.cloudinary.com/geeteshpp/image/upload/v1640068319/sample.jpg";

  return (
    <>
      {userDataLoading ? (
        <UserHeaderContentLoader />
      ) : (
        <StyledUserHeaderContainer>
          <StyledUserDetailsContainer>
            <StyledUserName numberOfLines={1} ellipsizeMode="tail">
              {userData?.getUser?.profile?.nickname}
            </StyledUserName>
            <StyledUserTextButton>
              <StyledUserTextButtonText>
                View and edit profile
              </StyledUserTextButtonText>
            </StyledUserTextButton>
          </StyledUserDetailsContainer>
          <StyledUserDpContainer onPress={displayDpFullScreen}>
            <StyledUserDp source={{ uri: dpUrl }} />
          </StyledUserDpContainer>
        </StyledUserHeaderContainer>
      )}
      {isDpFullScreen && (
        <FullScreenImage
          open={isDpFullScreen}
          onClose={closeDpFullScreen}
          images={[{ url: dpUrl }]}
        />
      )}
    </>
  );
};
