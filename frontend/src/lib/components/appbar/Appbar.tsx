import React from "react"
import Paper from "../paper/Paper"

import "./Appbar.css"

interface AppbarProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Appbar = ({ children, style = {} }: AppbarProps) => {
  return (
    <Paper
      style={{
        ...style,
      }}
      className="Appbar"
    >
      <div className="Navbar">{children}</div>
    </Paper>
  )
}

export default Appbar
