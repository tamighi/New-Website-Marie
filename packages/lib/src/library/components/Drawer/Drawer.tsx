import BlurryBackground from "../utils/BlurryBackground";

import { useStyles } from "../../hooks";

import CSSClasses from "./Drawer.css";

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  variant?: "persistent" | "temporary";
  anchor?: "left" | "right" | "bottom" | "top";
}

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactElement;
  children: React.ReactElement;
}) => (condition ? wrapper(children) : children);

const Drawer = (props: DrawerProps) => {
  const {
    style,
    children,
    className,
    open,
    onClose,
    anchor = "left",
    variant = "temporary",
    ...rest
  } = props;

  const classNames =
    `${CSSClasses.Drawer} ${
      anchor === "bottom" || anchor === "top"
        ? CSSClasses.Horizontal
        : CSSClasses.Vertical
    } ${
      variant === "persistent" ? CSSClasses.Persistent : CSSClasses.Temporary
    } ` + (className || "");

  const styles = useStyles("surface", style);

  styles.transition = styles.transition
    ? styles.transition + ", transform 225ms ease"
    : "transform 225ms ease";

  styles[anchor] = 0;

  return (
    <ConditionalWrapper
      condition={variant === "temporary"}
      wrapper={(children) => (
        <BlurryBackground onClick={onClose} visible={open}>
          {children}
        </BlurryBackground>
      )}
    >
      <div
        className={`${classNames} ${open ? "" : CSSClasses.HiddenDrawer}`}
        style={styles}
        {...rest}
      >
        {children}
      </div>
    </ConditionalWrapper>
  );
};

export default Drawer;
