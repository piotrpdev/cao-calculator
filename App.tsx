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
import ScoresContext, { ScoresContextType } from "./src/contexts/ScoresContext";

const Stack = createStackNavigator();

const defaultScores: ScoresContextType = {
  scores: [
    { id: nanoid(5), grade: "H4", subject: "Mathematics", points: 91 },
    { id: nanoid(5), grade: "H4", subject: "English", points: 66 },
    { id: nanoid(5), grade: "O3", subject: "Irish", points: 37 },
    { id: nanoid(5), grade: "H3", subject: "Physics", points: 77 },
    { id: nanoid(5), grade: "H2", subject: "Chemistry", points: 88 },
    { id: nanoid(5), grade: "H3", subject: "Biology", points: 77 },
    { id: nanoid(5), grade: "H3", subject: "Business", points: 77 },
    { id: nanoid(5), grade: "D", subject: "Link Modules", points: 66 },
  ],
  totalPoints: 476,
};

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ Inter_300Light, Inter_600SemiBold });
  const [dark, setDark] = useState(false);
  const [data, setScores] = useState(defaultScores);
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
      <ScoresContext.Provider value={{ data, setScores }}>
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
