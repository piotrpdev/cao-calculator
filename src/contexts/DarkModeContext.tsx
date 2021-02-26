import React from "react";

const DarkModeContext = React.createContext<{
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  dark: true,
  setDark: () => {
    return null;
  },
});

export default DarkModeContext;
