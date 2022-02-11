import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteNames } from "./constants";
import { PostScreen } from "../Screens/AppScreens/PostScreen";
import { FeedScreen } from "../Screens/AppScreens/FeedScreen";

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
        name={RouteNames.Post}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
