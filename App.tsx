import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider, Text } from "react-native-paper";

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
import { View } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

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

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_300Light, Inter_600SemiBold });
  const [dark, setDark] = useState(true);
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

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View>
      <Text>Loading...</Text>
    </View>
  }

  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      <ScoresContext.Provider value={{ data, setScores }}>
        <NavigationContainer theme={theme} onReady={onLayoutRootView}>
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
