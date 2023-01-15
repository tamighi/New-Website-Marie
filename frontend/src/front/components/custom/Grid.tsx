import React from "react"

import "../../styles/Grid.css"

interface GridProps {
  children?: React.ReactNode
  container?: boolean
  small?: number
  large?: number
}

const Grid = ({
  children,
  container = false,
  small = 1,
  large = small,
}: GridProps) => {

  const classNames = [container ? "GridContainer" : "GridItem"]

  if (!container) {
    classNames.push(`small-${small}`)
    classNames.push(`large-${large}`)
  }

  return <div className={classNames.join(" ")}>{children || ""}</div>
}

export default Grid
