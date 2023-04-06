import { Drawer, DrawerProps, useMediaQuery } from "lib";
import styles from "./RightDrawer.css"

export const RightDrawer = (props: DrawerProps) => {
  const { children, open, ...rest } = props;
  const isSmall = useMediaQuery("only screen and (max-width: 600px)")

  return (
    <Drawer
      open={open}
      variant="persistent"
      anchor="right"
      className={isSmall? styles.DesktopRightDrawer : styles.RightDrawer}
      {...rest}
    >
      {children}
    </Drawer>
  );
};
