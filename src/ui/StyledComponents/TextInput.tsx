import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
} from "react-native";

export interface RNTextInputProps extends TextInputProps {
  style?: TextStyle;
  color?: string;
  placeholderTextColor?: string;
}

const TextInput = ({
  style,
  color,
  ...rest
}: RNTextInputProps): JSX.Element => (
  <RNTextInput
    {...rest}
    placeholderTextColor={`${color || "grey"}`}
    style={{
      ...style,
      color: color || "white",
    }}
  />
);

export default TextInput;
