import style from "./FormContent.css";

export const FormContent = (props: React.HTMLAttributes<HTMLFormElement>) => {
  const { children, ...rest } = props;
  return (
    <form {...rest} className={style.FormContent}>
      {children}
    </form>
  );
};
