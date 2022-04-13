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
  UserOutput,
} from "@incoguzz/graphql";
import { setUserData } from "@incoguzz/redux";
import { useQuery } from "@apollo/client";
import { UserHeaderContentLoader } from "./UserHeaderContentLoader";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../../../Navigation/constants";
import { UserEditScreenNavigationProp } from "../../../Navigation/interfaces";
import { useAppDispatch } from "../../../redux/hooks";
import { defaultUserImage } from "../../../constants/defaultImages";

export const UserHeader: FC = () => {
  const { data, loading } = useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
  );

  const dispatch = useAppDispatch();

  const navigation = useNavigation<UserEditScreenNavigationProp>();

  const [isDpFullScreen, setIsDpFullScreen] = useState<boolean>(false);

  const displayDpFullScreen = () => {
    setIsDpFullScreen(true);
  };
  const closeDpFullScreen = () => {
    setIsDpFullScreen(false);
  };

  const dpUrl = data?.getUser?.profile?.dpUrl || defaultUserImage;

  const onPress = () => {
    navigation.navigate(RouteNames.UserEdit);
    dispatch(setUserData(data?.getUser as UserOutput));
  };

  return (
    <>
      {loading ? (
        <UserHeaderContentLoader />
      ) : (
        <StyledUserHeaderContainer>
          <StyledUserDetailsContainer>
            <StyledUserName numberOfLines={1} ellipsizeMode="tail">
              {data?.getUser?.profile?.nickname}
            </StyledUserName>
            <StyledUserTextButton onPress={onPress}>
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
