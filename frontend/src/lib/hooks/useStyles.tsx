import React from "react"

import useTheme from "./useTheme"

import Theme from "@lib/types/Theme"

import baseTheme from "@lib/constants/baseTheme.constants"

const useStyles = () => {
  const providedTheme = useTheme()

  const theme: Theme = providedTheme || baseTheme

  const styles: React.CSSProperties = {
    backgroundColor: theme.palette.primary.light,
  }

  return styles
}

export default useStyles
