import React, { useContext } from "react";
import { Switch } from "react-native-paper";
import DarkModeContext from "../contexts/DarkModeContext";

const DarkModeSwitch = (): JSX.Element => {
  const { dark, setDark } = useContext(DarkModeContext);

  return (
    <Switch
      value={dark}
      onValueChange={() => setDark((prev) => !prev)}
      accessibilityComponentType=""
      accessibilityTraits=""
    />
  );
};

export default DarkModeSwitch;
