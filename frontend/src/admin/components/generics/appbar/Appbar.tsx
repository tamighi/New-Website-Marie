import React from "react"

import LibAppbar from "../../../../lib/components/appbar/Appbar"
import IconButton from "../../../../lib/components/iconButton/IconButton"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

export const Appbar = () => {
  return (
    <LibAppbar style={{ backgroundColor: "lightblue" }}>
      <ThemeToggleIcon />
      <IconButton name="menu" onClick={() => console.log("hello")} />
      Appbar
    </LibAppbar>
  )
}
