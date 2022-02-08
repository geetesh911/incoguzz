import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../Screens/AppScreens/HomeScreen";
import { BottomMenu } from "../Components/layout/BottomMenu";
import { AboutScreen } from "../Screens/AppScreens/AboutScreen";
import { RouteNames } from "../constants/RoutesName";

const Tab = createBottomTabNavigator();

export const AppNavigator: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomMenu {...props} />}
    >
      <Tab.Screen
        component={HomeScreen}
        name={RouteNames.Messages}
      ></Tab.Screen>
      <Tab.Screen
        component={AboutScreen}
        name={RouteNames.Explore}
      ></Tab.Screen>
      <Tab.Screen
        component={HomeScreen}
        name={RouteNames.Notifications}
      ></Tab.Screen>
      <Tab.Screen component={AboutScreen} name={RouteNames.User}></Tab.Screen>
    </Tab.Navigator>
  );
};
