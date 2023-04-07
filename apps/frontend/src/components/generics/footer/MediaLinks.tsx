import { Card } from "lib";
import styles from "./Footer.css";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const MediaLinks = () => {
  return (
    <Card
      variant="primary"
      className={`${styles.FooterSection} ${styles.FooterMediaSection}`}
    >
      <FacebookIcon />
      <InstagramIcon />
      <LinkedinIcon />
    </Card>
  );
};
