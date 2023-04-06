import { Button, ButtonProps, useStyles } from "lib";

interface TabProps extends ButtonProps {
  active: Boolean;
}

export const Tab = (props: TabProps) => {
  const { active, children, ...rest } = props;
  const color = useStyles({ type: "secondary" });

  // TODO: button with variant bgcolor -> etc: contained -> color access bgcolor
  return (
    <Button
      style={{
        backgroundColor: active ? color.backgroundColor : "transparent",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
