import React from "react";
import { List, Divider } from "react-native-paper";

import { openBrowserAsync } from "expo-web-browser";
import { AboutProps as Props } from "../../utils/StackTypes";

const DependencyList = ({
  navigation,
}: Pick<Props, "navigation">): JSX.Element => {
  return (
    <List.Section style={{ marginTop: 20 }}>
      <Divider />
      <List.Item
        title="Expo"
        description="Used for app packaging and distribution."
        right={(props) => (
          <List.Icon
            {...props}
            style={{ alignSelf: "center", ...props.style }}
            icon="open-in-new"
          />
        )}
        onPress={() => openBrowserAsync("https://expo.io/")}
      />
      <Divider />
      <List.Item
        title="React Native"
        description="A framework for building native apps."
        right={(props) => (
          <List.Icon
            {...props}
            style={{ alignSelf: "center", ...props.style }}
            icon="open-in-new"
          />
        )}
        onPress={() => openBrowserAsync("https://reactnative.dev/")}
      />
      <Divider />
      <List.Item
        title="React Native Paper"
        description="Collection of customizable components."
        right={(props) => (
          <List.Icon
            {...props}
            style={{ alignSelf: "center", ...props.style }}
            icon="open-in-new"
          />
        )}
        onPress={() => openBrowserAsync("https://reactnativepaper.com/")}
      />
      <Divider />
      <List.Item
        title="Full list"
        description="A list of all the open source libraries being used."
        right={(props) => (
          <List.Icon
            {...props}
            style={{ alignSelf: "center", ...props.style }}
            icon="open-in-new"
          />
        )}
        onPress={() => navigation.navigate("Dependencies")}
      />
      <Divider />
    </List.Section>
  );
};

export default DependencyList;
