import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import ScoresContext from "../../contexts/ScoresContext";
import getTotalPoints from "../../utils/getTotalPoints";

const TotalPoints = (): JSX.Element => {
  const { data, setScores } = useContext(ScoresContext);
  const { totalPoints } = data;

  useEffect(() => {
    setScores((prev) => {
      return { ...prev, totalPoints: getTotalPoints(data.scores) };
    });
  }, [data.scores, setScores]);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "90%",
      }}
    >
      <Text style={{ marginRight: "80%" }}>Total</Text>
      <Text>{totalPoints}</Text>
    </View>
  );
};

export default TotalPoints;
