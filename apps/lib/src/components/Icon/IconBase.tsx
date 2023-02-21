import { DefaultProps } from "..";

import "./IconBase.css";

export type IconProps = DefaultProps;

const IconBase = (props: IconProps) => {
  const { style, className, children } = props;

  const classNames = "IconBase " + (className || "");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classNames}
      style={style}
    >
      {children}
    </svg>
  );
};

export default IconBase;
