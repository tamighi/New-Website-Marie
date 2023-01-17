import { PropType } from "../props"

import "./IconButton.css"

interface IconButtonProps extends PropType {
  onClick: (() => void) | undefined
}

const IconButton = (props: IconButtonProps) => {
  const { style, children, className, onClick } = props

  const classNames = "IconButton " + (className || "")

  return (
    <button className={classNames} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton
