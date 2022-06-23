import React, { FC, useEffect, useState } from "react";
import SplashScreen from "react-native-splash-screen";
import { ApolloProvider } from "@apollo/client";
import makeApolloClient from "../apollo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { ThemeManager } from "./styles/ThemeManager";
import { useTheme } from "./styles/theme";
import { useAppSelector } from "./redux/hooks";
import { Routes } from "./Navigation/Routes";
import { AuthHelper } from "./Components/auth";
import { PermissionUtil } from "./utils/permission.util";

const App: FC = () => {
  const isTokenReceived = useAppSelector(state => state.auth.isTokenReceived);

  const theme = useTheme();

  const [client, setClient] = useState(makeApolloClient({}));

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    (async () => {
      const permissionsGranted = await PermissionUtil.grantPermissions([
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.RECORD_AUDIO",
        "android.permission.CAMERA",
      ]);

      if (permissionsGranted) console.log("Permissions granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const token = await AuthHelper.getAccessToken();
      if (token) {
        setClient(makeApolloClient({ token }));
      }
    })();
  }, [isTokenReceived]);

  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <ThemeManager>
            <Routes theme={theme} />
          </ThemeManager>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </ApolloProvider>
  );
};

export default App;
