import { DefaultProps } from ".."
import "./ResponsiveGrid.css"

export interface ResponsiveGridProps extends DefaultProps {
  container?: boolean
  small?: number
  large?: number
}

const ResponsiveGrid = (props: ResponsiveGridProps) => {
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

export default ResponsiveGrid
