import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { IconButton, Text } from "react-native-paper";
import SubjectCard from "../components/Home/SubjectCard";
import ScoresContext from "../contexts/ScoresContext";
import gradeToPoints from "../utils/gradeToPoints";
import { HomeProps as Props } from "../utils/StackTypes";

export default function Home({ navigation }: Props): JSX.Element {
  const { scores } = useContext(ScoresContext);
  const [total, setTotal] = useState(0);
  const [totalPing, setTotalPing] = useState(0); // ! Slows down the app a good bit when changing something in a subject card. Trying useEffect with scores doesn't work because change is too small.

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

  useEffect(() => {
    const pretotal: number[] = [0];

    scores.forEach(({ grade, subject }) => {
      pretotal.push(gradeToPoints(grade, subject));
    });

    pretotal.sort((a, b) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    });

    setTotal(pretotal.slice(0, 6).reduce((a, b) => a + b));
  }, [scores, totalPing]);

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
            <SubjectCard
              totalPing={() => setTotalPing((prev) => prev + 1)}
              key={id}
              id={id}
              index={index}
            />
          ); /* This won't work if multiple of the same subject is used as key */
        })}
      </ScrollView>
      <View style={{ backgroundColor: "purple" }}>
        <Text>Total: {total}</Text>
      </View>
    </View>
  );
}
