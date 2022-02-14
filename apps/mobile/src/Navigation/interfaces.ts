import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteNames } from "./constants";

type TabParamList = {
  [RouteNames.User]: undefined;
  [RouteNames.Explore]: undefined;
  [RouteNames.Notifications]: undefined;
  [RouteNames.Messages]: undefined;
  [RouteNames.Feed]: undefined;
  [RouteNames.Post]: undefined;
  [RouteNames.AuthHome]: undefined;
  [RouteNames.Login]: undefined;
  [RouteNames.SignUp]: undefined;
};

export type LoginScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  RouteNames.Login
>;
export type SignUpScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  RouteNames.SignUp
>;
export type AuthHomeScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  RouteNames.AuthHome
>;

export type ExploreScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  RouteNames.Explore
>;

export type PostScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  RouteNames.Post
>;
