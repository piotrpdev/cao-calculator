import { Theme } from "react-native-paper/lib/typescript/types";

// const { colors } = useTheme() as CustomTheme;

export type CustomColors = Theme["colors"] & {
  primary: string;
  lightprimary: string;
};

export type CustomTheme = Theme & {
  colors: CustomColors;
};

const BrandTheme = {
  colors: {
    primary: "#25a55f",
    lightprimary: "#2be07d",
  },
};

export default BrandTheme;
