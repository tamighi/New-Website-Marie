import Paper from "../Paper/Paper"
import useStyles from "@lib/hooks/useStyles"
import Props from "@lib/types/Props"
import "./Appbar.css"

type AppbarProps = Props

const Appbar = (props: AppbarProps) => {
  const { style, children, className } = props

  const classNames = "Appbar " + (className || "")

  const styles = {
    ...useStyles(),
    ...style,
  }

  return (
    <Paper style={styles} className={classNames}>
      <div className="Navbar">{children}</div>
    </Paper>
  )
}

export default Appbar
