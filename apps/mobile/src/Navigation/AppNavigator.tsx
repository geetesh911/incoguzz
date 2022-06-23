import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MessagesScreen } from "../Screens/AppScreens/MessagesScreen";
import { BottomMenu } from "../Components/layout/BottomMenu";
import { RouteNames } from "./constants";
import { ExploreNavigator } from "./ExploreNavigator";
import { useAppSelector } from "../redux/hooks";
import { UserNavigator } from "./UserNavigator";
import { AddPostNavigator } from "./AddPostNavigator";

const Tab = createBottomTabNavigator();

export const AppNavigator: FC = () => {
  const videoPlayerState = useAppSelector(state => state.app.videoPlayerState);
  const hideBottomMenu = useAppSelector(state => state.app.hideBottomMenu);

  const hideBottomMenuRoutesIndex: number[] = [];

  return (
    <Tab.Navigator
      initialRouteName={RouteNames.User}
      screenOptions={{ headerShown: false }}
      tabBar={props => {
        return (
          !(
            videoPlayerState.isFullScreen ||
            hideBottomMenu ||
            hideBottomMenuRoutesIndex.includes(props.state.index)
          ) && <BottomMenu {...props} />
        );
      }}
    >
      <Tab.Screen
        component={MessagesScreen}
        name={RouteNames.Messages}
      ></Tab.Screen>
      <Tab.Screen
        component={ExploreNavigator}
        name={RouteNames.Explore}
      ></Tab.Screen>
      <Tab.Screen
        component={AddPostNavigator}
        name={RouteNames.AddPost}
      ></Tab.Screen>
      <Tab.Screen
        component={MessagesScreen}
        name={RouteNames.Notifications}
      ></Tab.Screen>
      <Tab.Screen component={UserNavigator} name={RouteNames.User}></Tab.Screen>
    </Tab.Navigator>
  );
};
