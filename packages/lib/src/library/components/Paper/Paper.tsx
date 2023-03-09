import { Colors } from "library/providers";
import { useStyles } from "../../hooks";

import CSSClasses from "./Paper.css";

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof Colors;
}

const Paper = (props: PaperProps) => {
  const {
    style: customStyle,
    variant: type = "surface",
    children,
    className,
  } = props;

  const classNames = `${CSSClasses.Paper} ` + (className || "");

  const styles = useStyles({ type, customStyle });

  return (
    <div className={classNames} style={styles}>
      {children}
    </div>
  );
};

export default Paper;
