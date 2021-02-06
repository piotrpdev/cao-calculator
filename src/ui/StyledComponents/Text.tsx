import React from "react";
import { Text as RNText, TextProps, TextStyle } from "react-native";

export interface RNTextProps extends TextProps {
  style?: TextStyle;
  color?: string;
  children: React.ReactNode;
}

const Text = ({
  children,
  style,
  color,
  ...rest
}: RNTextProps): JSX.Element => (
  <RNText
    {...rest}
    style={{
      ...style,
      color: color || "white",
    }}
  >
    {children}
  </RNText>
);

export default Text;
