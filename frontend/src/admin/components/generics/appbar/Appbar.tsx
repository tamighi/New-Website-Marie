import React from "react"

import LibAppbar from "../../../../lib/components/appbar/Appbar"
import IconButton from "../../../../lib/components/iconButton/IconButton"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

import useColors from "../../../hooks/useColors"

export const Appbar = () => {
  const colors = useColors()
  return (
    <LibAppbar style={{ backgroundColor: colors.primaryColor }}>
      <ThemeToggleIcon />
      <IconButton name="menu" onClick={() => console.log("hello")} />
      Appbar
    </LibAppbar>
  )
}
