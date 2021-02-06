import { DarkTheme as _DarkTheme } from "@react-navigation/native";
import { DarkTheme as _DarkThemePaper } from "react-native-paper";

const DarkTheme = {
  ..._DarkTheme,
  ..._DarkThemePaper,
  colors: {
    ..._DarkTheme.colors,
    ..._DarkThemePaper.colors,
    primary: "#25A55F",
    background: "#181A20",
  },
};

export default DarkTheme;
