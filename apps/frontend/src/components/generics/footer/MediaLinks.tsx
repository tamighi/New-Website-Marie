import styles from "./Footer.css";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const MediaLinks = () => {
  return (
    <div className={`${styles.FooterSection} ${styles.FooterMediaSection}`}>
      <FacebookIcon />
      <InstagramIcon />
      <LinkedinIcon />
    </div>
  );
};
