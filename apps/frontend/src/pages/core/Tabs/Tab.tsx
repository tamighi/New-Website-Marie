import { Button, ButtonProps } from "lib";

interface TabProps extends ButtonProps {
  active: Boolean;
}

export const Tab = (props: TabProps) => {
  const { active, children, ...rest } = props;

  return (
    <Button
      variant={active? "contained" : "text"}
      color="secondary"
      {...rest}
    >
      {children}
    </Button>
  );
};
