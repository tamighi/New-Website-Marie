import React from "react";
import styles from "./BasePage.css";

import { Card } from "lib";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  return <Card className={styles.MainContent}>{children}</Card>;
};

export const SideContent = ({ children }: { children: React.ReactNode }) => {
  return <Card className={styles.SideContent}>{children}</Card>;
};

export const FormContent = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.FormContent}>
      {children}
    </form>
  );
};
