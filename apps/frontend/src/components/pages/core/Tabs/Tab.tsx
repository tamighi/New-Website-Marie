import { Button, ButtonProps } from "lib";
import styles from "./styles.css";

interface TabProps extends ButtonProps {
  active: Boolean;
}

export const Tab = (props: TabProps) => {
  const { active, children, ...rest } = props;
  return (
    <Button {...rest} className={active ? styles.ActiveTab : ""}>
      {children}
    </Button>
  );
};
