import { useStyles } from "../../hooks";

import CSSClasses from "./IconBase.css";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  coloredPath: string;
}

const IconBase = (props: IconProps) => {
  const { style, className, children, coloredPath, ...rest } = props;

  const classNames = `${CSSClasses.IconBase} ` + (className || "");

  const styles = useStyles("transparent", style);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classNames}
      style={styles}
      {...rest}
    >
      <path d={coloredPath} fill={styles.color} />
      {children}
    </svg>
  );
};

export default IconBase;
