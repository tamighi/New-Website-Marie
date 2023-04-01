import { Button, Divider } from "lib";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.css";

export const Footer = () => {
  const navigation = useNavigate()

  return (
    <div className={styles.Footer}>
      <Divider />
      Footer
      <Button onClick={() => navigation("avis")}>Avis</Button>
    </div>
  );
};
