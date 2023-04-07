import { Button, Card } from "library";
import styles from "../styles/Page.css";

export const TestPage = () => {
  return (
    <div className={styles.Page}>
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "500px",
          height: "500px"
        }}
      >
        <Button variant="contained">Contained</Button>
        <Button variant="text">Outlined</Button>
      </Card>
    </div>
  );
};
