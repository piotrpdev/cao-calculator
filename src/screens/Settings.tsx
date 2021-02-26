import React from "react";
import { ScrollView } from "react-native";
import { IconButton, List, useTheme } from "react-native-paper";
import DarkModeSwitch from "../components/DarkModeSwitch";
import Debug from "../components/Settings/Debug";
import { CustomTheme } from "../themes/BrandTheme";

import { SettingsProps as Props } from "../utils/StackTypes";

export default function Settings({ navigation }: Props): JSX.Element {
  const { colors } = useTheme() as CustomTheme;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="information-outline"
          onPress={() => navigation.navigate("About")}
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <List.Section style={{ marginBottom: -8, marginTop: 0 }}>
        <List.Item
          title="Dark mode"
          right={(props) => (
            <DarkModeSwitch {...props} color={colors.primary} />
          )}
          left={(props) => <List.Icon {...props} icon="weather-night" />}
        />
      </List.Section>
      {__DEV__ && <Debug />}
    </ScrollView>
  );
}
