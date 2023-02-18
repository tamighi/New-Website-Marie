import { DefaultProps } from "../styles"
import "./IconButton.css"

interface IconButtonProps extends DefaultProps {
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
