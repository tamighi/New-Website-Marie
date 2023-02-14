import { DefaultProps } from ".."

import "./Paper.css"

export type PaperProps = DefaultProps

const Paper = (props: DefaultProps) => {
  const { style, children, className } = props

  const classNames = "Paper " + (className || "")

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  )
}

export default Paper
