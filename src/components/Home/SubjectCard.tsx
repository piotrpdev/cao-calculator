/* eslint-disable react/require-default-props */
import React from "react";
import { View, ViewProps } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Text, useTheme } from "react-native-paper";
import { CustomTheme } from "../../themes/BrandTheme";

// TODO: Hard code subjects

export type Grade =
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "H7"
  | "H8"
  | "O1"
  | "O2"
  | "O3"
  | "O4"
  | "O5"
  | "O6"
  | "O7"
  | "O8"
  | "D"
  | "M"
  | "P";

type SubjectCardProps = {
  cardProps?: ViewProps;
  subject: string;
  grade: Grade;
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

const SubjectCard = ({
  cardProps,
  grade,
  subject,
}: SubjectCardProps): JSX.Element => {
  const extraPoints = subject === "Maths" && grade.charAt(0) === "H";
  const { colors } = useTheme() as CustomTheme;
  const points = 48;
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
            <Text
              style={{
                fontSize: sizes.fontNormal,
                color: colors.primary,
              }}
            >
              {grade}
            </Text>
          </View>
          <View style={{ marginLeft: sizes.innerDistance }}>
            <Text style={{ fontSize: sizes.fontNormal }}>{subject}</Text>
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
          fill={80}
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
              <Text style={{ fontSize: sizes.fontSmall }}>
                {points} {}
              </Text>
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
