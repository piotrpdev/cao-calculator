import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// eslint-disable-next-line camelcase
import {
  useFonts,
  // eslint-disable-next-line camelcase
  Inter_300Light,
  // eslint-disable-next-line camelcase
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import Home from "./src/modules/Home";
import Settings from "./src/modules/Settings";

import DarkModeContext from "./src/contexts/DarkModeContext";
import DarkTheme from "./src/themes/DarkTheme";
import DefaultTheme from "./src/themes/DefaultTheme";

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ Inter_300Light, Inter_600SemiBold });
  const [dark, setDark] = useState(true);
  const [theme, setTheme] = useState(DarkTheme);

  useEffect(() => {
    const newTheme = dark ? DarkTheme : DefaultTheme;
    setTheme(newTheme);
  }, [dark]);

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer theme={theme}>
      <DarkModeContext.Provider value={{ dark, setDark }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </DarkModeContext.Provider>
    </NavigationContainer>
  );
}
