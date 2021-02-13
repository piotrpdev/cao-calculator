import React from "react";

const DarkModeContext = React.createContext<{
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  dark: false,
  setDark: () => {
    return null;
  },
});

export default DarkModeContext;
