import React from "react";
import { Colors, useTheme } from "../providers";

interface StyleOptions {
  customStyle?: React.CSSProperties;
  background?: keyof Colors | "transparent";
  color?: keyof Colors;
  themeTransition?: boolean;
  hover?: boolean;
}

const useStyles = (styleOptions: StyleOptions = {}) => {
  const {
    customStyle = {},
    background = "primary",
    color = "text",
    themeTransition: transition = true,
    hover = false,
  } = styleOptions;

  const theme = useTheme();
  const palette = theme.palette[theme.palette.mode];

  const defaultStyles: React.CSSProperties = {
    backgroundColor:
      (background !== "transparent" && palette[background]) || "transparent",
    color: palette[color],
    ...(hover
      ? {
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
        }
      : {}),
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
