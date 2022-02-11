import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MessagesScreen } from "../Screens/AppScreens/MessagesScreen";
import { BottomMenu } from "../Components/layout/BottomMenu";
import { ExploreScreen } from "../Screens/AppScreens/ExploreScreen";
import { RouteNames } from "./constants";

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
        component={ExploreScreen}
        name={RouteNames.Explore}
      ></Tab.Screen>
      <Tab.Screen
        component={MessagesScreen}
        name={RouteNames.Notifications}
      ></Tab.Screen>
      <Tab.Screen component={ExploreScreen} name={RouteNames.User}></Tab.Screen>
    </Tab.Navigator>
  );
};
