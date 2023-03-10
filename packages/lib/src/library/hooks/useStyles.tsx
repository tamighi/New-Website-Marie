import React from "react";
import { Colors, useTheme } from "../providers";

interface StyleOptions {
  customStyle?: React.CSSProperties;
  type?: keyof Colors | "transparent";
  color?: keyof Colors;
}

const useStyles = (styleOptions: StyleOptions) => {
  const { customStyle = {}, type = "primary", color = "text" } = styleOptions;

  const theme = useTheme();
  const palette = theme.palette.darkMode
    ? theme.palette.dark
    : theme.palette.light;

  const defaultStyles: React.CSSProperties = {
    backgroundColor: (type !== "transparent" && palette[type]) || "transparent",
    color: palette[color],
  };

  const mergedStyles: React.CSSProperties = {
    transition: customStyle.transition
      ? theme.transition + ", " + customStyle.transition
      : theme.transition,
  };

  const styles: React.CSSProperties = {
    ...defaultStyles,
    ...customStyle,
    ...mergedStyles,
  };

  return styles;
};

export default useStyles;
