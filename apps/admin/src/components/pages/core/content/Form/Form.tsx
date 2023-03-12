import style from "./Form.css";

export type FormProps = React.HTMLAttributes<HTMLFormElement>;

export const Form = (props: FormProps) => {
  const { children, className = "", ...rest } = props;

  const classNames = `${style.Form} ${className}`;

  return (
    <form {...rest} className={classNames}>
      {children}
    </form>
  );
};
