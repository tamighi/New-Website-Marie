import React from "react";
import styles from "./BasePage.css";

import { Card } from "lib";
import { SuspenseWrapper } from "../SuspenseWrapper";

export const BasePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className={styles.BasePage}>
      <SuspenseWrapper>{children}</SuspenseWrapper>
    </Card>
  );
};
