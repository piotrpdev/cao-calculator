import React from "react";

const DarkModeContext = React.createContext<{
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  dark: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDark: () => {},
});

export default DarkModeContext;
