import { DefaultTheme as _DefaultTheme } from "@react-navigation/native";
import { DefaultTheme as _DefaultThemePaper } from "react-native-paper";
import BrandTheme from "./BrandTheme";

// ? https://github.com/callstack/react-native-paper/blob/main/src/styles/DefaultTheme.tsx

const DefaultTheme = {
  ..._DefaultThemePaper,
  colors: {
    ..._DefaultTheme.colors,
    ..._DefaultThemePaper.colors,
    ...BrandTheme.colors,
    background: "#f9f9f9",
  },
};

export default DefaultTheme;
