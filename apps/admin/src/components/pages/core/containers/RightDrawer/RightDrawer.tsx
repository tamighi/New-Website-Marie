import { Drawer, DrawerProps } from "lib";
import styles from "./RightDrawer.css"

export const RightDrawer = (props: DrawerProps) => {
  const { children, open, ...rest } = props;
  return (
    <Drawer
      open={open}
      variant="persistent"
      anchor="right"
      className={styles.RightDrawer}
      {...rest}
    >
      {children}
    </Drawer>
  );
};
