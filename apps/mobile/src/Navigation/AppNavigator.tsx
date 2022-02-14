import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MessagesScreen } from "../Screens/AppScreens/MessagesScreen";
import { BottomMenu } from "../Components/layout/BottomMenu";
import { FeedScreen } from "../Screens/AppScreens/FeedScreen";
import { RouteNames } from "./constants";
import ExploreNavigator from "./ExploreNavigator";

const Tab = createBottomTabNavigator();

export const AppNavigator: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouteNames.Explore}
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomMenu {...props} />}
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
        component={MessagesScreen}
        name={RouteNames.AddPost}
      ></Tab.Screen>
      <Tab.Screen
        component={MessagesScreen}
        name={RouteNames.Notifications}
      ></Tab.Screen>
      <Tab.Screen component={FeedScreen} name={RouteNames.User}></Tab.Screen>
    </Tab.Navigator>
  );
};
