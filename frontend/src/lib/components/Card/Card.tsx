import useStyles from "@lib/hooks/useStyles"
import Props from "@lib/types/Props"
import "./Card.css"

const Card = (props: Props) => {
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
