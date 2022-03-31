import { GetPostsOutput } from "@incoguzz/graphql";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { RouteNames } from "./constants";

type IPostProps = {
  fixed: boolean;
  heading: string;
  initialIndex: number;
  posts?: GetPostsOutput[];
};

export type TabParamList = {
  [RouteNames.User]: undefined;
  [RouteNames.Explore]: undefined;
  [RouteNames.Notifications]: undefined;
  [RouteNames.Messages]: undefined;
  [RouteNames.Feed]: undefined;
  [RouteNames.ExplorePost]: IPostProps;
  [RouteNames.BookmarksPost]: IPostProps;
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
  RouteNames.ExplorePost
>;

export type PostScreenRouteProp = RouteProp<
  TabParamList,
  RouteNames.ExplorePost
>;
