import { DarkTheme as _DarkTheme } from "@react-navigation/native";

const DarkTheme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: "rgb(37, 165, 95)",
    background: "rgb(24, 26, 32)",
  },
};

export default DarkTheme;
