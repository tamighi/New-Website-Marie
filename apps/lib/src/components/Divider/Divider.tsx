import { DefaultProps } from ".."
import "./Divider.css"

export type DividerProps = DefaultProps

const Divider = (props: DividerProps) => {
  const { style, className } = props

  const classNames = "Card " + (className || "")

  return <hr className={classNames} style={style} />
}

export default Divider
