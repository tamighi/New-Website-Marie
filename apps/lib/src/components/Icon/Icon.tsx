import React from "react"
import "./Icon.css"

export interface IconProps {
  style?: React.CSSProperties
  className?: string
  src: string
}

const Icon = (props: IconProps) => {
  const { style, className, src } = props

  const classNames = "Icon " + (className || "")

  return <img className={classNames} style={style} src={src} alt="" />
}

export default Icon
