import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Text from "../../ui/StyledComponents/Text";
import TextInput from "../../ui/StyledComponents/TextInput";

const Home = (): JSX.Element => {
  const [keys, setKeys] = useState<string[]>();
  const [keyId, setKeyId] = useState("@ug_name");
  const [keyVal, setKeyVal] = useState("Peter");
  const [retKeyId, setRetKeyId] = useState("@ug_name");

  const getAllKeys = async () => {
    try {
      const value = (await AsyncStorage.getAllKeys()).filter((word) =>
        word.startsWith("@ug_")
      );
      if (value !== null) {
        // value previously stored
        setKeys(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getAllKeys();
  }, []);

  const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      Alert.alert("data stored");
      getAllKeys();
    } catch (e) {
      // saving error
    }
  };

  const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        Alert.alert(value);
      } else {
        Alert.alert("no value stored!");
      }
    } catch (e) {
      // error reading value
    }
  };

  const removeAll = async () => {
    try {
      if (keys) {
        AsyncStorage.multiRemove(keys);
      }
      getAllKeys();
    } catch (e) {
      // something
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <View style={{ marginBottom: 36, alignSelf: "center" }}>
          {keys && (
            <>
              {keys.map((val) => {
                return <Text key={`${val}`}>{val.slice(4)}</Text>;
              })}
            </>
          )}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: 8,
            borderColor: "white",
            marginBottom: 36,
            alignSelf: "center",
          }}
        >
          <View style={{ marginBottom: 24 }}>
            <TextInput
              placeholder="Which key do you want to write to?"
              onChangeText={(value) =>
                setKeyId(`@ug_${value && value.length > 0 ? value : "name"}`)
              }
            />
          </View>
          <View>
            <TextInput
              placeholder="What value do you want to write?"
              onChangeText={(value) =>
                setKeyVal(`${value && value.length > 0 ? value : "Peter"}`)
              }
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 36,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View style={{ marginBottom: 12 }}>
              <Button title="Write" onPress={() => storeData(keyId, keyVal)} />
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: 8,
            borderColor: "white",
            alignSelf: "center",
            marginBottom: 36,
          }}
        >
          <TextInput
            placeholder="Which key do you want to retrieve?"
            onChangeText={(value) =>
              setRetKeyId(`@ug_${value && value.length > 0 ? value : "name"}`)
            }
          />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center", marginBottom: 24 }}>
            <Button title="Get" onPress={() => getData(retKeyId)} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Button title="Remove all" onPress={removeAll} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
