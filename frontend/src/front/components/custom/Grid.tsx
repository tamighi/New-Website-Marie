import React from "react"

import "../../styles/Grid.css"

interface GridProps {
  children: React.ReactNode
  container?: boolean
  xs?: number
  md?: number
}

const Grid = ({ children, container = false, xs = 1, md = xs }: GridProps) => {
  let GridStyle = {}
  if (!container) {
    GridStyle = {
      gridColumn: `span ${xs}`,
    }
  }
  console.log(GridStyle)

  return (
    <div className={container ? "GridContainer" : "GridItem"} style={GridStyle}>
      {children}
    </div>
  )
}

export default Grid
