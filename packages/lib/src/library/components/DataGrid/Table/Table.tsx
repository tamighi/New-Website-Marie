import { useStyles } from "library";

import CSSClasses from "./Table.css";

export type TableProps = React.HTMLAttributes<HTMLTableElement>;

const Table = (props: TableProps) => {
  const { children, className, style: customStyle, ...rest } = props;

  const classNames = `${CSSClasses.Table} ` + (className || "");

  const styles = useStyles({ type: "transparent", customStyle });

  return (
    <table {...rest} style={styles} className={classNames}>
      {children}
    </table>
  );
};

export default Table;
