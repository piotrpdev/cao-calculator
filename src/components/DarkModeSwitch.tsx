import React, { useContext } from "react";
import { Switch } from "react-native-paper";
import DarkModeContext from "../contexts/DarkModeContext";
import { storeDark } from "../utils/darkStorage";

type Props = {
  color: string;
  // eslint-disable-next-line react/require-default-props
  style?:
    | {
        marginRight: number;
        marginVertical?: number | undefined;
      }
    | undefined;
};

const DarkModeSwitch = (props: Props): JSX.Element => {
  const { dark, setDark } = useContext(DarkModeContext);

  return (
    <Switch
      value={dark}
      {...props}
      onValueChange={() =>
        setDark((prev) => {
          try {
            storeDark(!prev);
          } catch (err) {
            //
          }
          return !prev;
        })
      }
      accessibilityComponentType=""
      accessibilityTraits=""
    />
  );
};

export default DarkModeSwitch;
