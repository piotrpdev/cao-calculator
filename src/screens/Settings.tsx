import React from "react";
import { ScrollView } from "react-native";
import { IconButton, List } from "react-native-paper";
import DarkModeSwitch from "../components/DarkModeSwitch";

import { SettingsProps as Props } from "../utils/StackTypes";

export default function Settings({ navigation }: Props): JSX.Element {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="information-outline"
          onPress={() => navigation.navigate("About")}
          accessibilityComponentType=""
          accessibilityTraits=""
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <List.Section accessibilityComponentType="" accessibilityTraits="">
        <List.Subheader accessibilityComponentType="" accessibilityTraits="">
          Appearance
        </List.Subheader>
        <List.Item
          title="Dark mode"
          accessibilityComponentType=""
          accessibilityTraits=""
          right={() => <DarkModeSwitch />}
          left={() => <List.Icon icon="weather-night" />}
        />
        {/* <Divider accessibilityComponentType="" accessibilityTraits="" /> */}
      </List.Section>
    </ScrollView>
  );
}
