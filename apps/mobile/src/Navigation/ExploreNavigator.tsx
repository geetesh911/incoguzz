import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteNames } from "./constants";
import { PostScreen } from "../Screens/ExploreScreens/PostScreen";
import { FeedScreen } from "../Screens/ExploreScreens/FeedScreen";

const Stack = createNativeStackNavigator();

export const ExploreNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.Feed}
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen
        component={FeedScreen}
        name={RouteNames.Feed}
      ></Stack.Screen>
      <Stack.Screen
        component={PostScreen}
        name={RouteNames.ExplorePost}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
