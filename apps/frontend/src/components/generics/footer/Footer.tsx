import { Button, Divider, Paper } from "lib";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.css";

export const Footer = () => {
  const navigation = useNavigate();

  return (
    <div className={styles.FooterContainer}>
      <Divider />
      <Paper className={styles.Footer}>
        Footer
        <Button onClick={() => navigation("avis")}>Avis</Button>
      </Paper>
    </div>
  );
};
