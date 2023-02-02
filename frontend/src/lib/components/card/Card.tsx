import useTheme from "@lib/hooks/useTheme"
import { PropType } from "../props"

import "./Card.css"

const Card = (props: PropType) => {
  const { style, children, className } = props

  const classNames = "Card " + (className || "")

  const theme = useTheme()

  if (!theme || !theme.palette) {
    return null
  }

  const palette = theme.palette

  const styles: React.CSSProperties = palette?.darkMode
    ? {
        backgroundColor: palette.primary.dark,
        color: palette.text.dark,
      }
    : {
        backgroundColor: palette.primary.light,
        color: palette.text.light,
      }

  return (
    <div className={classNames} style={{ ...styles, ...style }}>
      {children}
    </div>
  )
}

export default Card
