import React from "react";
import TabNavigator from "./src/navigation/TabNavigation";
import { Provider } from "react-redux";
import store from "./src/redux/store"

export default function App() {

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
