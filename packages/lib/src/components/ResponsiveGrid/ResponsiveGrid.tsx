import { DefaultProps } from "..";
import CSSClasses from "./ResponsiveGrid.css";

export interface ResponsiveGridProps extends DefaultProps {
  container?: boolean;
  small?: number;
  large?: number;
}

const ResponsiveGrid = (props: ResponsiveGridProps) => {
  const { style, children, className, container, small, large } = props;

  const classNames = [
    container ? CSSClasses.GridContainer : CSSClasses.GridItem,
  ];

  if (!container) {
    classNames.push(CSSClasses[`small-${small}`]);
    classNames.push(CSSClasses[`large-${large}`]);
  }

  if (className) {
    classNames.push(className);
  }

  return (
    <div className={classNames.join(" ")} style={style}>
      {children || ""}
    </div>
  );
};

export default ResponsiveGrid;
