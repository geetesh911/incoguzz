import React, { useEffect, useState } from "react";
import SplashScreen from "react-native-splash-screen";
import { ApolloProvider } from "@apollo/client";
import makeApolloClient from "../apollo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { ThemeManager } from "./styles/ThemeManager";
import { useTheme } from "./styles/theme";
import { useAppSelector } from "./redux/hooks";
import { Routes } from "./Navigation/Routes";
import AuthHelper from "./helpers/auth.helper";

const App = () => {
  const isTokenReceived = useAppSelector(state => state.auth.isTokenReceived);

  const theme = useTheme();

  const [client, setClient] = useState(
    makeApolloClient({
      token:
        "b4290bfbfd1ea60c7c8533950aa55029c44dcad102e8c87a2eba490fa2f7a9222477bdfe769ceda235e2bd897916c0490c6da2396b1050c754e7d409ab75ab4f0fb029515cfb0a8da41341de374b69c07f4ec9c2cb5af816401a9552f9a09792d0142a97b84a84e215d56a89a3d8b8ff311bbc1b619810e72f6066e429eafafb3aeb7726d61ceb274668bf6555fc864422530f05e654bc6ee0a44d7523843a02502ba29b0304c61cbc9991fce2c36a3982b7474b293965fbfc35d4afe955dcde181d58787a68c87ec0dd9a954120bed42559d451a45bdb6d1605f94b55d3bc301d1d59166d56abb1b6eb24eeed7bbffca21840ef83f3c10ef1a5a5b4f2b7b02d95f2055ac9846999f23ca74bd7e022d0ead02eae04dd3c68b8423e4c4c95bbf9a3eafc29b594cce7b0d8493534fd95ac6732b4516ca9b5e6e09c6e2f80cc03b2c37276e98b71ad7f1f188a",
    }),
  );

  useEffect(() => {
    SplashScreen.hide();
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
