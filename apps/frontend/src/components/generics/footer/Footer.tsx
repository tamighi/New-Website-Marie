import { Divider, Paper } from "lib";

import { MediaLinks } from "./MediaLinks";
import { NavLinks } from "./NavLinks";
import { Copyrights } from "./Copyrights";

import styles from "./Footer.css";

export const Footer = () => {

  return (
    <div className={styles.FooterContainer}>
      <Divider />
      <div className={styles.Footer}>
        <MediaLinks />
        <NavLinks />
        <Copyrights />
      </div>
    </div>
  );
};
