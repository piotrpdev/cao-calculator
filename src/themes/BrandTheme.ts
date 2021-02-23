import { Theme } from "react-native-paper/lib/typescript/types";

// const { colors } = useTheme() as CustomTheme;

export type CustomColors = Theme["colors"] & {
  primary: string;
  lightprimary: string;
  disabledprimary: string;
  card: string;
};

export type CustomTheme = Theme & {
  colors: CustomColors;
};

const BrandTheme = {
  colors: {
    primary: "#25a55f",
    lightprimary: "#2be07d",
    disabledprimary: "rgba(169, 169, 169, 0.1)",
  },
};

export default BrandTheme;
