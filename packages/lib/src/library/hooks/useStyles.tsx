import React from "react";
import { Colors, useTheme } from "../providers";

interface StyleOptions {
  customStyle?: React.CSSProperties;
  type?: keyof Colors | "transparent";
  color?: keyof Colors;
}

const useStyles = (styleOptions: StyleOptions) => {
  const { customStyle, type = "primary", color = "text" } = styleOptions;

  const theme = useTheme();
  const styles: React.CSSProperties = {};

  const palette = theme.palette.darkMode
    ? theme.palette.dark
    : theme.palette.light;

  styles.backgroundColor =
    customStyle?.backgroundColor ||
    (type !== "transparent" && palette[type]) ||
    "transparent";

  styles.color = customStyle?.color || palette[color];
  styles.transition = customStyle?.transition
    ? theme.transition + ", " + customStyle.transition
    : theme.transition;

  return styles;
};

export default useStyles;
