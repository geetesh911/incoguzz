import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "@incoguzz/redux";
import App from "./src/App";

const AppWrapper: FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
