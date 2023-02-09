import { Props } from "@lib/types"

import "./Grid.css"

interface GridProps extends Props {
  container?: boolean
  small?: number
  large?: number
}

const Grid = (props: GridProps) => {
  const { style, children, className, container, small, large } = props

  const classNames = [container ? "GridContainer" : "GridItem"]

  if (!container) {
    classNames.push(`small-${small}`)
    classNames.push(`large-${large}`)
  }

  if (className) {
    classNames.push(className)
  }

  return (
    <div className={classNames.join(" ")} style={style}>
      {children || ""}
    </div>
  )
}

export default Grid
