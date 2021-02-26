import React, { useContext } from "react";
import { ScrollView, View } from "react-native";

import { IconButton, useTheme } from "react-native-paper";
import SubjectCard from "../components/Home/SubjectCard";
import TotalPoints from "../components/Home/TotalPoints";
import ScoresContext from "../contexts/ScoresContext";
import { CustomTheme } from "../themes/BrandTheme";
import { HomeProps as Props } from "../utils/StackTypes";

export default function Home({ navigation }: Props): JSX.Element {
  const {
    data: { scores },
  } = useContext(ScoresContext);

  const { colors } = useTheme() as CustomTheme;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="cog-outline"
          onPress={() => navigation.navigate("Settings")}
        />
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: colors.card,
        height: "100%",
      }}
    >
      <ScrollView
        style={{
          height: "90%",
          width: "100%",
          padding: 18,
          paddingTop: 9,
          backgroundColor: colors.background,
        }}
      >
        {scores.map(({ id }, index) => {
          return <SubjectCard key={id} id={id} index={index} />;
        })}
      </ScrollView>
      <View
        style={{
          width: "100%",
          paddingTop: 20,
          paddingBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TotalPoints />
      </View>
    </View>
  );
}
