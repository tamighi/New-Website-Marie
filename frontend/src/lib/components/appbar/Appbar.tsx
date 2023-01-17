import Paper from "../paper/Paper"
import { PropType } from "../props"

import "./Appbar.css"

const Appbar = (props: PropType) => {
  const { style, children, className } = props

  const classNames = "Appbar " + (className || "")

  return (
    <Paper style={style} className={classNames}>
      <div className="Navbar">{children}</div>
    </Paper>
  )
}

export default Appbar
