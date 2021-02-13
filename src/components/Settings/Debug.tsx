import React, { useEffect, useState } from "react";
import { Divider, List } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Debug(): JSX.Element {
  const [allKeys, setAllKeys] = useState<string[]>([]);
  const [allStored, setAllStored] = useState<Array<[string, string | null]>>([
    ["", ""],
  ]);
  const [keysExpanded, setKeysExpanded] = useState(true);
  const [bit, setBit] = useState(false);

  const forceUpdate = () => setBit((prev) => !prev);

  useEffect(() => {
    (async function getKeys(): Promise<void> {
      setAllKeys(await AsyncStorage.getAllKeys());
    })();
  }, [bit]);

  useEffect(() => {
    (async function getKeys(): Promise<void> {
      setAllStored(await AsyncStorage.multiGet(allKeys));
    })();
  }, [allKeys]);

  return (
    <List.Section accessibilityComponentType="" accessibilityTraits="">
      <Divider accessibilityComponentType="" accessibilityTraits="" />
      <List.Item
        title="Force update"
        onPress={() => forceUpdate()}
        left={(props) => <List.Icon {...props} icon="update" />}
        accessibilityComponentType=""
        accessibilityTraits=""
      />
      <Divider accessibilityComponentType="" accessibilityTraits="" />
      <List.Accordion
        title="All keys"
        expanded={keysExpanded}
        left={(props) => (
          <List.Icon
            {...props}
            // ! Hard-coded sizes
            style={{ marginLeft: 0, marginRight: 16 }}
            icon="folder-key-outline"
          />
        )}
        onPress={() => setKeysExpanded((prev) => !prev)}
      >
        {allStored.map(([key, value]) => (
          <>
            <Divider accessibilityComponentType="" accessibilityTraits="" />
            <List.Item
              title={key}
              key={key}
              description={value}
              style={{ marginLeft: 20 }}
              left={(props) => <List.Icon {...props} icon="key" />}
              right={(props) => (
                <List.Icon {...props} icon="trash-can-outline" />
              )}
              onPress={() =>
                AsyncStorage.removeItem(key).then(() => forceUpdate())
              }
              accessibilityComponentType=""
              accessibilityTraits=""
            />
          </>
        ))}
      </List.Accordion>
      <Divider accessibilityComponentType="" accessibilityTraits="" />
      <List.Item
        title="Store test key"
        onPress={() =>
          AsyncStorage.setItem("@CAO_test", "value").then(() => forceUpdate())
        }
        left={(props) => <List.Icon {...props} icon="content-save-outline" />}
        accessibilityComponentType=""
        accessibilityTraits=""
      />
      <Divider accessibilityComponentType="" accessibilityTraits="" />
      <List.Item
        title="Clear all"
        onPress={() =>
          AsyncStorage.multiRemove(allKeys).then(() => forceUpdate())
        }
        left={(props) => <List.Icon {...props} icon="autorenew" />}
        accessibilityComponentType=""
        accessibilityTraits=""
      />
      <Divider accessibilityComponentType="" accessibilityTraits="" />
    </List.Section>
  );
}
