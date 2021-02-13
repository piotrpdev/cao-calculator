import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  About: undefined;
  Dependencies: undefined;
  Feed: { sort: "latest" | "top" } | undefined;
};

export type HomeProps = StackScreenProps<RootStackParamList, "Home">;
export type SettingsProps = StackScreenProps<RootStackParamList, "Settings">;
export type AboutProps = StackScreenProps<RootStackParamList, "About">;
