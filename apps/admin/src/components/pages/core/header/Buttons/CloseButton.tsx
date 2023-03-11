import { CloseIcon, IconButton } from "lib";

export const CloseButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <IconButton {...props}>
      <CloseIcon />
    </IconButton>
  );
};
