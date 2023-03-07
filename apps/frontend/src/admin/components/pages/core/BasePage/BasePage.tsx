import React from "react";
import styles from "./BasePage.css";

import { Card } from "lib";

export const BasePage = ({ children }: { children: React.ReactNode }) => {
  return <Card className={styles.BasePage}>{children}</Card>;
};
