import { useStyles } from "../../hooks";

import CSSClasses from "./Paper.css";

export type PaperProps = React.HTMLAttributes<HTMLDivElement>;

const Paper = (props: PaperProps) => {
  const { style, children, className } = props;

  const classNames = `${CSSClasses.Paper} ` + (className || "");

  const styles = useStyles("surface", style);

  return (
    <div className={classNames} style={styles}>
      {children}
    </div>
  );
};

export default Paper;
