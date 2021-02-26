import React from "react";
import { View, ScrollView } from "react-native";
import { Subheading, Title, Paragraph, Avatar } from "react-native-paper";

import { openBrowserAsync } from "expo-web-browser";

import { TouchableOpacity } from "react-native-gesture-handler";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import avatar from "../../assets/avatar.png";

import { AboutProps as Props } from "../utils/StackTypes";
import DependencyList from "../components/About/DependencyList";

export default function About({ navigation }: Props): JSX.Element {
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => openBrowserAsync("https://github.com/RazerMoon")}
            style={{ marginBottom: 10 }}
          >
            <Avatar.Image
              size={120}
              source={avatar}
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 2,

                elevation: 5,
              }}
            />
          </TouchableOpacity>
          <Title>Hi, I&apos;m Peter!</Title>
          <Subheading style={{ marginBottom: 20 }}>
            The creator of this app.
          </Subheading>
          <Paragraph style={{ textAlign: "center" }}>
            I created this app with the goal of helping out some of my fellow
            Leaving Cert students who struggle to calculate their estimated CAO
            points. Thank you for using it, I hope it helped you.
          </Paragraph>
        </View>

        <Paragraph style={{ textAlign: "center" }}>
          If you&apos;re wondering, this app was built using:
        </Paragraph>

        <DependencyList navigation={navigation} />
      </View>
    </ScrollView>
  );
}
