import React, { FC } from "react";
import { RouteNames } from "../../../Navigation/constants";
import { BookmarksBody } from "./BookmarksBody";
import Option, { IOptionProps } from "./Option";
import {
  LogoutIcon,
  BookmarkIcon,
  MultipleUsersIcon,
  SettingsIcon,
  PostsIcon,
} from "../../icons";
import { useMutation } from "@apollo/client";
import { AuthHelper } from "../../auth";
import { useAppDispatch } from "../../../redux/hooks";
import { setIsTokenReceived } from "@incoguzz/redux";
import {
  LogoutDocument,
  LogoutMutation,
  LogoutMutationVariables,
} from "@incoguzz/graphql";

export const UserBody: FC = () => {
  const dispatch = useAppDispatch();

  const [logout] = useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    {
      onCompleted: async () => {
        await AuthHelper.clearTokens();
        dispatch(setIsTokenReceived(false));
      },
      onError: error => {
        console.log(error.message);
      },
    },
  );

  const options: IOptionProps[] = [
    {
      label: "Bookmarks",
      Icon: BookmarkIcon,
      body: <BookmarksBody />,
      navigateTo: RouteNames.Bookmarks,
    },
    { label: "Posts", Icon: PostsIcon, navigateTo: RouteNames.UserPosts },
    { label: "Invite Friends", Icon: MultipleUsersIcon },
    { label: "Settings", Icon: SettingsIcon },
    { label: "Logout", Icon: LogoutIcon, onPress: () => logout() },
  ];

  return (
    <>
      {options.map(option => (
        <Option key={option.label} {...option} />
      ))}
    </>
  );
};
