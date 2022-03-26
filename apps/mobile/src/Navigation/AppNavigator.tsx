import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MessagesScreen } from "../Screens/AppScreens/MessagesScreen";
import { AddPostScreen } from "../Screens/AppScreens/AddPostScreen";
import { UserScreen } from "../Screens/AppScreens/UserScreen";
import { BottomMenu } from "../Components/layout/BottomMenu";
import { RouteNames } from "./constants";
import ExploreNavigator from "./ExploreNavigator";
import { useAppSelector } from "../redux/hooks";

const Tab = createBottomTabNavigator();

export const AppNavigator: FC = () => {
  const videoPlayerState = useAppSelector(state => state.app.videoPlayerState);

  return (
    <Tab.Navigator
      initialRouteName={RouteNames.Explore}
      screenOptions={{ headerShown: false }}
      tabBar={props =>
        !videoPlayerState.isFullScreen && <BottomMenu {...props} />
      }
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
        component={AddPostScreen}
        name={RouteNames.AddPost}
      ></Tab.Screen>
      <Tab.Screen
        component={MessagesScreen}
        name={RouteNames.Notifications}
      ></Tab.Screen>
      <Tab.Screen component={UserScreen} name={RouteNames.User}></Tab.Screen>
    </Tab.Navigator>
  );
};
