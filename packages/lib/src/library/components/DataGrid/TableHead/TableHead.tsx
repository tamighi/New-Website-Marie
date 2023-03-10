import { useStyles } from "library";

import CSSClasses from "./TableHead.css";

export type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;

const TableHead = (props: TableHeadProps) => {
  const { children, className, style: customStyle, ...rest } = props;

  const classNames = `${CSSClasses.TableHead} ` + (className || "");

  const styles = useStyles({ type: "primary", customStyle });

  return (
    <thead {...rest} style={styles} className={classNames}>
      {children}
    </thead>
  );
};

export default TableHead;
