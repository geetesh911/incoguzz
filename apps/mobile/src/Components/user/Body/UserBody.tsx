import React, { FC } from "react";
import { RouteNames } from "../../../Navigation/constants";
import { PostsIcon } from "../../icons/PostsIcon";
import { BookmarkIcon } from "../../icons/BookmarkIcon";
import { MultipleUsersIcon } from "../../icons/MulpleUsersIcon";
import { SettingsIcon } from "../../icons/SettingsIcon";
import { BookmarksBody } from "./BookmarksBody";
import Option, { IOptionProps } from "./Option";

export const UserBody: FC = () => {
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
  ];

  return (
    <>
      {options.map(option => (
        <Option key={option.label} {...option} />
      ))}
    </>
  );
};
