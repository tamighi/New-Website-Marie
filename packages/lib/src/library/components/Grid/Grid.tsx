import React from "react";
import CSSClasses from "./Grid.css";

type BreakPoints = "xs" | "sm" | "md" | "lg" | "xl";

const getCurrentBreakPoint = (): BreakPoints => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1536) {
    return "xl";
  } else if (windowWidth >= 1200) {
    return "lg";
  } else if (windowWidth >= 900) {
    return "md";
  } else if (windowWidth >= 600) {
    return "sm";
  } else {
    return "xs";
  }
};

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  container?: boolean;
} & { [K in BreakPoints]?: number };

const Grid = (props: GridProps) => {
  const {
    style = {},
    children,
    className = "",
    container,
    xs = 1,
    sm = xs,
    md = sm,
    lg = md,
    xl = lg,
    ...rest
  } = props;

  const breakPoints = { xs, sm, md, lg, xl };

  const [currentBreakPoint, setCurrentBreakPoint] =
    React.useState<BreakPoints>(getCurrentBreakPoint);

  const classNames =
    `${container ? CSSClasses.GridContainer : ""} ` + className;

  React.useEffect(() => {
    function handleResize() {
      setCurrentBreakPoint(getCurrentBreakPoint());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  style.gridColumn =
    style.gridColumn ||
    (container ? "" : `span ${breakPoints[currentBreakPoint]}`);

  return (
    <div className={classNames} style={style} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
