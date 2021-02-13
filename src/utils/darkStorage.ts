import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getDark(): Promise<string | null> {
  return AsyncStorage.getItem("@CAO_dark");
}

export async function storeDark(value: boolean): Promise<void> {
  await AsyncStorage.setItem("@CAO_dark", String(value));
}

export default async function initDark(): Promise<boolean> {
  let final = false;

  try {
    const dark = await getDark();

    if (dark === null) {
      await storeDark(false);
    } else if (dark === "true" || dark === "false") {
      final = dark === "true";
    }
  } catch (error) {
    //
  }

  return final;
}
