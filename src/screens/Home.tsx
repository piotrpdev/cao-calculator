import React, { useContext } from "react";
import { ScrollView, View } from "react-native";

import { IconButton } from "react-native-paper";
import SubjectCard from "../components/Home/SubjectCard";
import TotalPoints from "../components/Home/TotalPoints";
import ScoresContext from "../contexts/ScoresContext";
import { HomeProps as Props } from "../utils/StackTypes";

export default function Home({ navigation }: Props): JSX.Element {
  const {
    data: { scores },
  } = useContext(ScoresContext);

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
      }}
    >
      <ScrollView
        style={{
          height: "70%",
          width: "100%",
          padding: 18,
          paddingTop: 9,
          marginBottom: 20,
        }}
      >
        {scores.map(({ id }, index) => {
          return (
            <SubjectCard key={id} id={id} index={index} />
          ); /* This won't work if multiple of the same subject is used as key */
        })}
      </ScrollView>
      <View style={{ backgroundColor: "purple" }}>
        <TotalPoints />
      </View>
    </View>
  );
}
