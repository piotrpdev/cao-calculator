import React from "react";
import { View } from "react-native";

import { IconButton, Text } from "react-native-paper";
import { HomeProps as Props } from "../utils/StackTypes";

export default function Home({ navigation }: Props): JSX.Element {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="cog-outline"
          onPress={() => navigation.navigate("Settings")}
          accessibilityComponentType=""
          accessibilityTraits=""
        />
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text accessibilityComponentType="" accessibilityTraits="">
        Hello
      </Text>
    </View>
  );
}
