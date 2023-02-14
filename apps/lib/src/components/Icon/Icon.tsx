import { DefaultProps } from ".."

import "./Icon.css"

export interface IconProps extends DefaultProps {
  src: string
}

const Icon = (props: IconProps) => {
  const { style, className, src } = props

  const classNames = "Icon " + (className || "")

  return <img className={classNames} style={style} src={src} alt="" />
}

export default Icon
