import { DefaultTheme as _DefaultTheme } from "@react-navigation/native";

const DefaultTheme = {
  ..._DefaultTheme,
  colors: {
    ..._DefaultTheme.colors,
    primary: "rgb(37, 165, 95)",
    background: "rgb(249, 249, 249)",
  },
};

export default DefaultTheme;
