import React from "react"
import "./Icon.css"

interface IconProps {
  style?: React.CSSProperties
  className?: string
  name: string
}

const Icon = (props: IconProps) => {
  const { style, className, name } = props

  const classNames = "Icon " + (className || "")

  return (
    <img
      className={classNames}
      style={style}
      src={`icons/${name}.svg`}
      alt=""
    />
  )
}

export default Icon
