import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteNames } from "./constants";
import { PostScreen } from "../Screens/ExploreScreens/PostScreen";
import { UserInfoScreen } from "../Screens/UserScreens/UserInfoScreen";
import { UserPostsScreen } from "../Screens/UserScreens/UserPostsScreen";
import { UserBookmarks } from "../Components/user";
import { UserEditScreen } from "../Screens/UserScreens/UserEditScreen";

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
      <Stack.Screen
        component={PostScreen}
        name={RouteNames.UserPost}
      ></Stack.Screen>
      <Stack.Screen
        component={UserPostsScreen}
        name={RouteNames.UserPosts}
      ></Stack.Screen>
      <Stack.Screen
        component={UserEditScreen}
        name={RouteNames.UserEdit}
      ></Stack.Screen>
      <Stack.Screen
        component={UserBookmarks}
        name={RouteNames.Bookmarks}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
