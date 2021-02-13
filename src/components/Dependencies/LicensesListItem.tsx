import React from "react";

import { Avatar, List } from "react-native-paper";

import { openBrowserAsync } from "expo-web-browser";
import { StyleSheet } from "react-native";
import { LicensesType } from "../../utils/getLicensesFromJSON";

type Props = Omit<LicensesType, "parents" | "key">;

const styles = StyleSheet.create({
  avatar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,

    elevation: 5,
  },
});

const LicensesListItem = ({
  image,
  username,
  name,
  version,
  repository,
  licenses,
}: Props): JSX.Element => {
  return (
    <List.Item
      title={name}
      description={`${version} • ${licenses} • ${username}`}
      style={{ margin: 5 }}
      onPress={() => openBrowserAsync(repository)}
      accessibilityComponentType=""
      accessibilityTraits=""
      left={(props) => (
        <Avatar.Image
          accessibilityComponentType=""
          accessibilityTraits=""
          {...props}
          style={[styles.avatar, props.style]}
          source={{ uri: image }}
        />
      )}
      right={(props) => (
        <List.Icon
          {...props}
          style={{ alignSelf: "center", ...props.style }}
          icon="open-in-new"
        />
      )}
    />
  );
};

export default LicensesListItem;
