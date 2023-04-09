import { Button, Card, Grid, Input, TextArea } from "library";
import styles from "../styles/Page.css";

export const TestPage = () => {
  return (
    <div className={styles.Page}>
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          width: "500px",
          height: "500px",
        }}
      >
        <Grid container style={{ gap: "12px" }}>
          <Grid xs={12} sm={8} md={6} lg={3}>
            <Button variant="contained">Contained</Button>
          </Grid>
          <Grid xs={12} sm={8} md={6} lg={3}>
            <Button variant="contained">Contained</Button>
          </Grid>
          <Grid xs={12} sm={8} md={6} lg={3}>
            <Button variant="contained">Contained</Button>
          </Grid>
          <Grid xs={12} sm={8} md={6} lg={3}>
            <Button variant="text">Outlined</Button>
          </Grid>
          <Grid xs={12}>
            <Input flex placeholder={"test"} />
          </Grid>
          <Grid xs={12}>
            <Input />
          </Grid>
          <Grid xs={12}>
            <TextArea placeholder={"Name"} />
          </Grid>
        </Grid>
        <Input flex placeholder="flex"/>
        <TextArea flex placeholder={"flex"} />
      </Card>
    </div>
  );
};
