import React from "react"

import { useTheme } from "../hooks"

const useStyles = (
  type: "background" | "primary" | "secondary" = "primary"
) => {
  const theme = useTheme()

  const darkMode = theme.palette.darkMode
  const color =
    type === "primary"
      ? theme.palette.primary
      : type === "secondary"
      ? theme.palette.secondary
      : theme.palette.background

  const colors: React.CSSProperties = darkMode
    ? {
        backgroundColor: color.dark,
        color: theme.palette.text.dark,
      }
    : {
        backgroundColor: color.light,
        color: theme.palette.text.light,
      }

  const styles: React.CSSProperties = {
    ...colors,
    transition: theme.transition,
  }

  return styles
}

export default useStyles
