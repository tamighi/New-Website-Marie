import { Button, Card, Grid } from "library";
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
          height: "500px",
        }}
      >
        <Grid container>
          <Grid xs={12} sm={8} md={6} lg={3}>
            <Button variant="contained">Contained</Button>
          </Grid>
          <Grid xs={12} sm={8} md={6} lg={3}>
            <Button variant="text">Outlined</Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};
