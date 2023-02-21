import React from "react";

import { AnimatedPage } from "../../utils/AnimatedPage";

import styles from "./Page.css";

export const BasePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Page}>
      <AnimatedPage>{children}</AnimatedPage>
    </div>
  );
};
