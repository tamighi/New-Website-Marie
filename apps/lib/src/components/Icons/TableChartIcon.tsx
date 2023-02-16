import { Icon } from ".."
import { SvgIconProps } from "."
import iconPath from "assets/icons/table_chart.svg"

const TableChartIcon = (props: SvgIconProps) => {
  return <Icon {...props} src={iconPath} />
}

export default TableChartIcon
