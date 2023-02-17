import { DefaultProps } from ".."

import "./IconBase.css"

export interface IconProps extends Omit<DefaultProps, "children"> {
  path: string
}

const IconBase = (props: IconProps) => {
  const { style, className, path } = props

  const classNames = "IconBase " + (className || "")

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classNames}
      style={style}
    >
      <path d={path} />
    </svg>
  )
}

export default IconBase
