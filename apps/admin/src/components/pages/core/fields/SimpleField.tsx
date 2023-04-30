import styles from "./SimpleField.css";

export type SimpleFieldProps = {
  children: React.ReactNode;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const SimpleField = (props: SimpleFieldProps) => {
  const { children, label, className = "", ...rest } = props;
  return (
    <div className={`${styles.SimpleField} ${className}`} {...rest}>
      {label ? <span className={styles.SimpleFieldLabel}>{label}</span> : ""}
      {children}
    </div>
  );
};
