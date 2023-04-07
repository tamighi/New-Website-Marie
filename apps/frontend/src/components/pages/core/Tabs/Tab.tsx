import { Button, ButtonProps } from "lib";

interface TabProps extends ButtonProps {
  active: Boolean;
}

// TODO: outlined button for inactive tabs lib
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
