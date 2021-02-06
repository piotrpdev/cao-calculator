import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  About: undefined;
  Feed: { sort: "latest" | "top" } | undefined;
};

export type HomeProps = StackScreenProps<RootStackParamList, "Home">;
export type SettingsProps = StackScreenProps<RootStackParamList, "Settings">;
