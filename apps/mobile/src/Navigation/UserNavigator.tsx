import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteNames } from "./constants";
import { PostScreen } from "../Screens/AppScreens/PostScreen";
import { UserInfoScreen } from "../Screens/AppScreens/UserInfoScreen";

const Stack = createNativeStackNavigator();

export const UserNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.UserInfo}
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen
        component={UserInfoScreen}
        name={RouteNames.UserInfo}
      ></Stack.Screen>
      <Stack.Screen
        component={PostScreen}
        name={RouteNames.BookmarksPost}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
