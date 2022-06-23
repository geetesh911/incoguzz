import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteNames } from "./constants";
import { LoginScreen } from "../Screens/AuthScreens/LoginScreen";
import { SignUpScreen } from "../Screens/AuthScreens/SignUpScreen";
import { AuthHomeScreen } from "../Screens/AuthScreens/AuthHomeScreen";

const Stack = createNativeStackNavigator();

export const AuthNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.AuthHome}
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen
        component={AuthHomeScreen}
        name={RouteNames.AuthHome}
      ></Stack.Screen>
      <Stack.Screen
        component={SignUpScreen}
        name={RouteNames.SignUp}
      ></Stack.Screen>
      <Stack.Screen
        component={LoginScreen}
        name={RouteNames.Login}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
