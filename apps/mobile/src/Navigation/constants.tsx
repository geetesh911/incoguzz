import React from "react";
import {
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
  Feed = "Feed",
  Post = "Post",
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
    User: <UserIcon color={color} />,
  };
  return routeIcons[routeName];
};
