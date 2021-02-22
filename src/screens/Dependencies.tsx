import React from "react";

import { Divider } from "react-native-paper";
import { openBrowserAsync } from "expo-web-browser";
import LicenseList from "../components/Dependencies/LicenseList";
import getLicensesFromJSON from "../utils/getLicensesFromJSON";

// eslint-disable-next-line import/extensions
import licenses from "../../assets/licenses.json";
import LicensesListItem from "../components/Dependencies/LicensesListItem";

// ! "resolveJsonModule" in tsconfig must be set to true for this to work.

export default function Dependencies(): JSX.Element {
  return (
    <LicenseList
      data={getLicensesFromJSON(licenses)}
      ItemSeparatorComponent={() => (
        <Divider
          style={{ marginHorizontal: 10 }}
          accessibilityComponentType=""
          accessibilityTraits=""
        />
      )}
      renderItem={({ item }) => (
        <LicensesListItem onPress={(url) => openBrowserAsync(url)} {...item} />
      )}
    />
  );
}
