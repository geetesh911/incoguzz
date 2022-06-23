import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteNames } from "./constants";
import { ChoosePostScreen } from "../Screens/AddPostScreens/ChoosePostScreen";
import PostUploadScreen from "../Screens/AddPostScreens/PostUploadScreen";

const Stack = createNativeStackNavigator();

export const AddPostNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.ChoosePost}
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen
        component={ChoosePostScreen}
        name={RouteNames.ChoosePost}
      ></Stack.Screen>
      <Stack.Screen
        component={PostUploadScreen}
        name={RouteNames.PostUpload}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
