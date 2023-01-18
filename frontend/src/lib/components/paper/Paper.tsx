import useColors from "../../hooks/hooks/useColors"
import { PropType } from "../props"

import "./Paper.css"

const Paper = (props: PropType) => {
  const { style, children, className } = props

  const classNames = "Paper " + (className || "")

  const colors = useColors()

  return (
    <div
      className={classNames}
      style={{ ...style, ...{ backgroundColor: colors.primaryColor } }}
    >
      {children}
    </div>
  )
}

export default Paper
