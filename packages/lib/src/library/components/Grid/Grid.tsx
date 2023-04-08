import { useCurrentBreakpoint } from "library/hooks";
import React from "react";
import CSSClasses from "./Grid.css";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Grid = (props: GridProps) => {
  const {
    style = {},
    children,
    className = "",
    container,
    xs = 0,
    sm = xs,
    md = sm,
    lg = md,
    xl = lg,
    ...rest
  } = props;

  const breakPoints = { xs, sm, md, lg, xl };

  const currentBreakPoint = useCurrentBreakpoint();

  const styles = {
    gridColumn: container ? "" : `span ${breakPoints[currentBreakPoint]}`,
    ...style,
  };

  const classNames =
    `${container ? CSSClasses.GridContainer : ""} ` + className;

  return (
    <div className={classNames} style={styles} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
