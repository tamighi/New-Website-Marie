import { PropType } from "../props"

import "./Paper.css"

const Paper = (props: PropType) => {
  const { style, children, className } = props

  const classNames = "Paper " + (className || "")

  return (
    <div
      className={classNames}
      style={{ ...style, ...{ backgroundColor: "var(--primary-color)" } }}
    >
      {children}
    </div>
  )
}

export default Paper
