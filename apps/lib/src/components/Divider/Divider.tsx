import { useStyles } from "../../hooks"
import { DefaultProps } from ".."
import "./Divider.css"

export type DividerProps = DefaultProps

const Divider = (props: DividerProps) => {
  const { style, className } = props

  const classNames = "Divider " + (className || "")

  const styles = {
    ...useStyles("secondary"),
    ...style,
  }

  return <hr className={classNames} style={styles} />
}

export default Divider
