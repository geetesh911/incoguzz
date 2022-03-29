import React from "react";
import {
  AddIcon,
  ExploreIcon,
  MessagesIcon,
  NotificationIcon,
  UserIcon,
} from "../Components/icons";

type RoutesInputType = { color?: string; routeName: string };
type RoutesType = { [key: string]: JSX.Element };

export enum RouteNames {
  Messages = "Messages",
  Explore = "Explore",
  Notifications = "Notifications",
  User = "User",
  UserInfo = "UserInfo",
  Feed = "Feed",
  ExplorePost = "ExplorePost",
  BookmarksPost = "BookmarksPost",
  AddPost = "AddPost",
  AuthHome = "AuthHome",
  Login = "Login",
  SignUp = "SignUp",
}
export const RouteIcons = ({
  color,
  routeName,
}: RoutesInputType): JSX.Element => {
  const routeIcons: RoutesType = {
    Messages: <MessagesIcon color={color} />,
    Explore: <ExploreIcon color={color} />,
    Notifications: <NotificationIcon color={color} />,
    AddPost: <AddIcon color={color} />,
    User: <UserIcon color={color} />,
  };
  return routeIcons[routeName];
};
