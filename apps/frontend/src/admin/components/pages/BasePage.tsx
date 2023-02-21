import React from "react";
import styles from "./BasePage.css";

export const BasePage = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.BasePage}>{children}</div>;
};
