import React from "react";
import { View, SafeAreaView, Text } from "react-native";

export default function Settings(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
}
