import { useStyles } from "../../hooks"
import { Props } from "../../types"

import "./Card.css"

type CardProps = Props

const Card = (props: CardProps) => {
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
