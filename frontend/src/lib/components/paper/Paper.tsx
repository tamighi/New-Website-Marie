import React from "react"

import "./Paper.css"

interface PaperProps {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

const Paper = ({ children, style = {}, className }: PaperProps) => {

  const classNames = "Paper" + className ? " " + className : ""

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  )
}

export default Paper
