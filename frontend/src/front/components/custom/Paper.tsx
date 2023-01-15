import React from "react"
import { useColors } from "../../hooks/useColors"

import "../../styles/Paper.css"

interface PaperProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Paper = ({ children, style = {} }: PaperProps) => {
  const colors = useColors()
  return (
    <div
      className="Paper"
      style={{ backgroundColor: colors.primaryColor, ...style }}
    >
      {children}
    </div>
  )
}

export default Paper
