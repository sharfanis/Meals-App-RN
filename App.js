import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
import { LogBox } from "react-native";
//Redux special Imports
import { createStore, combineReducers } from "redux";
import mealsReducers from "./store/reducers/meals";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  meals: mealsReducers,
});

const appStore = createStore(rootReducer);
// Telling react to use optmized screen component. its a good practice.
enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    imbue: require("./assets/fonts/Imbue.ttf"),
    "imbue-bold": require("./assets/fonts/Imbue-Bold.ttf"),
    bangers: require("./assets/fonts/Bangers-Regular.ttf"),
  });
};

export default function App() {
  // Ignoring All warnings except errors.
  LogBox.ignoreAllLogs(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log(err)}
      />
    );
  }

  return (
    <Provider store={appStore}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
