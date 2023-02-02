import useStyles from "@lib/hooks/useStyles"
import { PropType } from "../props"

import "./Card.css"

const Card = (props: PropType) => {
  const { style, children, className } = props

  const classNames = "Card " + (className || "")

  const styles = {
    ...useStyles(),
    ...style,
  }

  return (
    <div className={classNames} style={styles}>
      {children}
    </div>
  )
}

export default Card
