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
  const styles: React.CSSProperties = customStyle || {};

  const palette = theme.palette.darkMode
    ? theme.palette.dark
    : theme.palette.light;

  styles.backgroundColor =
    styles.backgroundColor ||
    (type !== "transparent" && palette[type]) ||
    "transparent";

  styles.color = styles.color || palette[color];
  styles.transition = styles.transition
    ? theme.transition + ", " + styles.transition
    : theme.transition;

  return styles;
};

export default useStyles;
