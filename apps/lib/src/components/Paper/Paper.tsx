import { Props } from "../../types"

import "./Paper.css"

const Paper = (props: Props) => {
  const { style, children, className } = props

  const classNames = "Paper " + (className || "")

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  )
}

export default Paper
