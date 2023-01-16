import React from "react"

import "./Paper.css"

interface PaperProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Paper = ({ children, style = {} }: PaperProps) => {
  return (
    <div className="Paper" style={style}>
      {children}
    </div>
  )
}

export default Paper
