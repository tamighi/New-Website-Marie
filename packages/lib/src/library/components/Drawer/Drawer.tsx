import BlurryBackground from "../utils/BlurryBackground";

import { useStyles } from "../../hooks";

import CSSClasses from "./Drawer.css";

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}

const Drawer = (props: DrawerProps) => {
  const { style, children, className, open, onClose, ...rest } = props;

  const classNames = `${CSSClasses.Drawer} ` + (className || "");

  const styles = useStyles("surface", style);

  styles.transition = styles.transition
    ? styles.transition + ", transform 225ms ease"
    : "transform 225ms ease";

  return (
    <BlurryBackground onClick={onClose} visible={open}>
      <div
        className={`${classNames} ${open ? "" : CSSClasses.HiddenDrawer}`}
        style={styles}
        {...rest}
      >
        {children}
      </div>
    </BlurryBackground>
  );
};

export default Drawer;
