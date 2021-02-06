import { DefaultTheme as _DefaultTheme } from "@react-navigation/native";
import { DefaultTheme as _DefaultThemePaper } from "react-native-paper";

const DefaultTheme = {
  ..._DefaultTheme,
  ..._DefaultThemePaper,
  colors: {
    ..._DefaultTheme.colors,
    ..._DefaultThemePaper.colors,
    primary: "rgb(37, 165, 95)",
    background: "rgb(249, 249, 249)",
  },
};

export default DefaultTheme;
