import "./Card.css"
import { PropType } from "../props"

const Card = (props: PropType) => {
  const { style, children, className } = props

  const classNames = "Card " + (className || "")

  return (
    <div
      className={classNames}
      style={{ ...style, backgroundColor: "var(--primary-color)" }}
    >
      {children}
    </div>
  )
}

export default Card
