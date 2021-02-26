/* eslint-disable react/require-default-props */
import React, { useContext, useState } from "react";
import { FlatList, View, ViewProps } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dialog, List, Portal, Text, useTheme } from "react-native-paper";
import ScoresContext, {
  Grade,
  gradeValues,
  Subject,
  subjectValues,
} from "../../contexts/ScoresContext";
import { CustomTheme } from "../../themes/BrandTheme";
import gradeToPoints from "../../utils/gradeToPoints";

// TODO: Hard code subjects

type SubjectCardProps = {
  id: string;
  index: number;
  cardProps?: ViewProps;
};

const sizes = {
  cardHeight: 84,
  borderRadius: 15,
  fontNormal: 16,
  fontSmall: 13,
  get cardDivider() {
    return this.cardHeight * 0.2;
  },
  get innerDistance() {
    return this.cardHeight * 0.16;
  },
  get circleSpacing() {
    return this.cardHeight * 0.3;
  },
  get gradePadding() {
    return (this.cardHeight - this.innerDistance * 2) / 2;
  },
};

const SubjectCard = ({ index, cardProps }: SubjectCardProps): JSX.Element => {
  const { data, setScores } = useContext(ScoresContext);
  const { subject, grade } = data.scores[index];

  const extraPoints =
    subject === "Mathematics" &&
    grade.charAt(0) === "H" &&
    parseInt(grade.charAt(1), 10) < 7;

  const points = gradeToPoints(grade, subject);
  const { colors } = useTheme() as CustomTheme;

  const [showSubjectDialog, setShowSubjectDialog] = useState(false);
  const toggleSubjectDialog = () => setShowSubjectDialog((prev) => !prev);

  const [showGradeDialog, setShowGradeDialog] = useState(false);
  const toggleGradeDialog = () => setShowGradeDialog((prev) => !prev);

  const setGrade = (val: Grade) => {
    setScores((prev) => {
      const newScores = prev.scores;
      newScores[index].grade = val;
      newScores[index].points = gradeToPoints(val, newScores[index].subject);
      return { ...prev, scores: [...newScores] }; // ? If there is an error with key in Home, it might be due to this
    });
  };

  const setSubject = (val: Subject) => {
    setScores((prev) => {
      const newScores = prev.scores;
      newScores[index].subject = val;
      newScores[index].points = gradeToPoints(newScores[index].grade, val);
      return { ...prev, scores: [...newScores] };
    });
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: sizes.cardDivider,
        height: sizes.cardHeight,
        position: "relative",
      }}
      accessibilityLabel="Top-invis"
      {...cardProps}
    >
      <View
        style={{
          justifyContent: "center",
          borderRadius: sizes.borderRadius,
          backgroundColor: colors.card,
          height: sizes.cardHeight - sizes.innerDistance,
        }}
        accessibilityLabel="Inner-card"
      >
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: sizes.borderRadius,
              width: sizes.cardHeight - sizes.innerDistance * 2,
              height: sizes.cardHeight - sizes.innerDistance * 2,
              marginLeft: sizes.innerDistance,
              backgroundColor: colors.disabledprimary,
            }}
          >
            <TouchableOpacity
              onPress={toggleGradeDialog}
              style={{ padding: sizes.innerDistance }}
            >
              <Text
                style={{
                  fontSize: sizes.fontNormal,
                  color: colors.primary,
                }}
              >
                {grade}
              </Text>
            </TouchableOpacity>
            <Portal>
              <Dialog visible={showGradeDialog} onDismiss={toggleGradeDialog}>
                <Dialog.Title>Select Grade</Dialog.Title>
                <Dialog.Content>
                  <FlatList
                    data={
                      subject === "Link Modules"
                        ? gradeValues.filter((val) => val.length === 1)
                        : gradeValues.filter((val) => val.length > 1)
                    }
                    style={{ maxHeight: 300 }}
                    renderItem={({ item }) => (
                      <List.Item
                        onPress={() => {
                          setGrade(item);
                          toggleGradeDialog();
                        }}
                        title={item}
                      />
                    )}
                    keyExtractor={(item) => item}
                  />
                </Dialog.Content>
              </Dialog>
            </Portal>
          </View>
          <View style={{ marginLeft: sizes.innerDistance }}>
            <TouchableOpacity onPress={toggleSubjectDialog}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: sizes.fontNormal,
                  padding: sizes.innerDistance,
                  width: 200,
                }}
              >
                {data.scores[index].subject}
              </Text>
            </TouchableOpacity>
            <Portal>
              <Dialog
                visible={showSubjectDialog}
                onDismiss={toggleSubjectDialog}
              >
                <Dialog.Title>Select Subject</Dialog.Title>
                <Dialog.Content>
                  <FlatList
                    data={subjectValues}
                    style={{ maxHeight: 300 }}
                    renderItem={({ item }) => (
                      <List.Item
                        onPress={() => {
                          setSubject(item);
                          toggleSubjectDialog();
                        }}
                        title={item}
                      />
                    )}
                    keyExtractor={(item) => item}
                  />
                </Dialog.Content>
              </Dialog>
            </Portal>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          right: 0,
          marginRight: sizes.circleSpacing,
          borderRadius: sizes.cardHeight / 2,
          width: sizes.cardHeight,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.card,
        }}
        accessibilityLabel="Points"
      >
        <AnimatedCircularProgress
          size={70}
          width={5}
          fill={points * 0.8}
          rotation={0}
          lineCap="round"
          backgroundColor={colors.disabledprimary}
          tintColor={colors.primary}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {() => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: sizes.fontSmall }}>{points}</Text>
              {extraPoints && (
                <Text
                  style={{ color: colors.disabled, fontSize: sizes.fontSmall }}
                >
                  (+25)
                </Text>
              )}
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
};

export default SubjectCard;
