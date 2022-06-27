import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteNames } from "./constants";
import { PostScreen } from "../Screens/ExploreScreens/PostScreen";
import { InboxScreen } from "../Screens/MessageScreens/InboxScreen";

const Stack = createNativeStackNavigator();

export const MessageNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.Inbox}
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen
        component={InboxScreen}
        name={RouteNames.Inbox}
      ></Stack.Screen>
      <Stack.Screen
        component={PostScreen}
        name={RouteNames.ExplorePost}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
