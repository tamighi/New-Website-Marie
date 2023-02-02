import "./Card.css"
import { PropType } from "../props"
import { useTheme } from "@lib/hooks/contexts/ThemeContext"

const Card = (props: PropType) => {
  const { style, children, className } = props

  const classNames = "Card " + (className || "")

  const { palette } = useTheme()

  const styles: React.CSSProperties = palette?.darkMode
    ? {
        backgroundColor: palette.primary.dark,
        color: palette.text.dark
      }
    : {
        backgroundColor: palette.primary.light,
        color: palette.text.light
      }

  return (
    <div className={classNames} style={{ ...styles, ...style }}>
      {children}
    </div>
  )
}

export default Card
