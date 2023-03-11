import { Toolbar, ToolbarProps } from "lib";

export const Header = (props: ToolbarProps) => {
  const { children, ...rest } = props;

  return <Toolbar {...rest}>{children}</Toolbar>;
};
