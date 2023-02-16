import React from "react"

import { useTheme } from "../hooks"

const useStyles = () => {
  const theme = useTheme()

  const darkMode = theme.palette.darkMode

  const styles: React.CSSProperties = darkMode
    ? {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.text.dark,
      }
    : {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.light,
      }

  return styles
}

export default useStyles
