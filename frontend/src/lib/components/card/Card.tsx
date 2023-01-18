import "./Card.css"
import { PropType } from "../props"
import useColors from "../../hooks/hooks/useColors"

const Card = (props: PropType) => {
  const { style, children, className } = props

  const classNames = "Card " + (className || "")

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

export default Card
