import { DarkTheme as _DarkTheme } from "@react-navigation/native";
import { DarkTheme as _DarkThemePaper } from "react-native-paper";
import BrandTheme from "./BrandTheme";

const DarkTheme = {
  ..._DarkThemePaper,
  colors: {
    ..._DarkTheme.colors,
    ..._DarkThemePaper.colors,
    ...BrandTheme.colors,
    background: "#181A20",
  },
};

export default DarkTheme;
