import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

// eslint-disable-next-line camelcase
import {
  useFonts,
  // eslint-disable-next-line camelcase
  Inter_300Light,
  // eslint-disable-next-line camelcase
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import { nanoid } from "nanoid/non-secure";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";

import DarkModeContext from "./src/contexts/DarkModeContext";

import DarkTheme from "./src/themes/DarkTheme";
import DefaultTheme from "./src/themes/DefaultTheme";
import About from "./src/screens/About";
import Dependencies from "./src/screens/Dependencies";
import initDark from "./src/utils/darkStorage";
import ScoresContext, { Score } from "./src/contexts/ScoresContext";

const Stack = createStackNavigator();

const defaultScores: Score[] = [
  { id: nanoid(5), grade: "H4", subject: "Mathematics" },
  { id: nanoid(5), grade: "H4", subject: "English" },
  { id: nanoid(5), grade: "O3", subject: "Irish" },
  { id: nanoid(5), grade: "H3", subject: "Physics" },
  { id: nanoid(5), grade: "H2", subject: "Chemistry" },
  { id: nanoid(5), grade: "H3", subject: "Biology" },
  { id: nanoid(5), grade: "H3", subject: "Business" },
  { id: nanoid(5), grade: "D", subject: "Link Modules" },
];

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ Inter_300Light, Inter_600SemiBold });
  const [dark, setDark] = useState(false);
  const [scores, setScores] = useState(defaultScores);
  const [theme, setTheme] = useState(DarkTheme);

  useEffect(() => {
    (async function getDark(): Promise<void> {
      setDark(await initDark());
    })();
  }, []);

  useEffect(() => {
    const newTheme = dark ? DarkTheme : DefaultTheme;
    setTheme(newTheme);
  }, [dark]);

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      <ScoresContext.Provider value={{ scores, setScores }}>
        <NavigationContainer theme={theme}>
          <PaperProvider theme={theme}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: "Overall score" }}
              />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="About" component={About} />
              <Stack.Screen name="Dependencies" component={Dependencies} />
            </Stack.Navigator>
          </PaperProvider>
        </NavigationContainer>
      </ScoresContext.Provider>
    </DarkModeContext.Provider>
  );
}
