import React from "react";
import { Colors, useTheme } from "../providers";

const useStyles = (
  type: keyof Colors | "transparent",
  appendStyle?: React.CSSProperties
) => {
  const theme = useTheme();
  const styles: React.CSSProperties = {};

  const palette = theme.palette.darkMode
    ? theme.palette.dark
    : theme.palette.light;

  styles.backgroundColor =
    appendStyle?.backgroundColor ||
    (type !== "transparent" && palette[type]) ||
    "transparent";

  styles.color = appendStyle?.color || palette.text;
  styles.transition = appendStyle?.transition
    ? appendStyle.transition + ", " + theme.transition
    : theme.transition;

  return styles;
};

export default useStyles;
