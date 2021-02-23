import React from "react";
import { ScrollView, View } from "react-native";

import { IconButton, Text } from "react-native-paper";
import SubjectCard, { Grade } from "../components/Home/SubjectCard";
import { HomeProps as Props } from "../utils/StackTypes";

export default function Home({ navigation }: Props): JSX.Element {
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

  const scores: { grade: Grade; subject: string }[] = [
    { grade: "H4", subject: "Maths" },
    { grade: "H4", subject: "English" },
    { grade: "O3", subject: "Irish" },
    { grade: "H3", subject: "Physics" },
    { grade: "H2", subject: "Chemistry" },
    { grade: "H3", subject: "Biology" },
    { grade: "H3", subject: "Business" },
  ];

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
        {scores.map(({ grade, subject }) => {
          return (
            <SubjectCard key={subject} grade={grade} subject={subject} />
          ); /* This won't work if multiple of the same subject is used as key */
        })}
      </ScrollView>
      <View style={{ backgroundColor: "yellow" }}>
        <Text>Total: 465</Text>
      </View>
    </View>
  );
}
