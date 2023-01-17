import LibPaper from "../../../lib/components/paper/Paper"
import useColors from "../../hooks/useColors"

interface PaperProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Paper = ({ children, style = {} }: PaperProps) => {
  const colors = useColors()

  return (
    <LibPaper style={{ ...style, ...{ backgroundColor: colors.primaryColor } }}>
      {children}
    </LibPaper>
  )
}

export default Paper
