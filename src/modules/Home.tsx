import React, { useContext } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import DarkModeContext from "../contexts/DarkModeContext";

export default function Home(): JSX.Element {
  const { dark, setDark } = useContext(DarkModeContext);
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
    },
  });

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
        <Text style={styles.text}>Bruh :) {String(dark)}</Text>
        <Button title={String(dark)} onPress={() => setDark((prev) => !prev)} />
      </View>
    </SafeAreaView>
  );
}
