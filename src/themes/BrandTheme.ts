import { Theme } from "react-native-paper/lib/typescript/types";

// const { colors } = useTheme() as CustomTheme;

export type CustomColors = Theme["colors"] & {
  primary: string;
  lightprimary: string;
  disabledprimary: string;
  card: string;
  avatar: Record<"string", "string" | "number">;
};

export type CustomTheme = Theme & {
  colors: CustomColors;
};

const BrandTheme = {
  colors: {
    primary: "#25a55f",
    lightprimary: "#2be07d",
    disabledprimary: "rgba(169, 169, 169, 0.1)",
    avatar: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 2,

      elevation: 5,
    },
  },
};

export default BrandTheme;
