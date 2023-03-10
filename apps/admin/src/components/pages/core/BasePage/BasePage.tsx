import React from "react";
import styles from "./BasePage.css";

export const FormContent = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.FormContent}>
      {children}
    </form>
  );
};
