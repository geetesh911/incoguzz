import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteNames } from "../constants/RoutesName";

type TabParamList = {
  [RouteNames.User]: undefined;
  [RouteNames.Explore]: undefined;
  [RouteNames.Notifications]: undefined;
  [RouteNames.Messages]: undefined;
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
