import React from "react";
import { Colors, useTheme } from "../providers";

interface StyleOptions {
  customStyle?: React.CSSProperties;
  type?: keyof Colors | "transparent";
  color?: keyof Colors;
  themeTransition?: boolean;
}

const useStyles = (styleOptions: StyleOptions = {}) => {
  const {
    customStyle = {},
    type = "primary",
    color = "text",
    themeTransition: transition = true,
  } = styleOptions;

  const theme = useTheme();
  const palette = theme.palette.darkMode
    ? theme.palette.dark
    : theme.palette.light;

  const defaultStyles: React.CSSProperties = {
    backgroundColor: (type !== "transparent" && palette[type]) || "transparent",
    color: palette[color],
  };

  const mergedStyles: React.CSSProperties = {
    transition: !transition
      ? customStyle.transition
      : customStyle.transition
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
