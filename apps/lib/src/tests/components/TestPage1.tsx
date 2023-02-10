import { Card, Grid } from "@components"

export const TestPage1 = () => {
  return (
    <Grid container>
      <Grid large={3} />
      <Grid large={6}>
        <Card>
          <div style={{ fontSize: "200%" }}>Hello world !</div>
        </Card>
      </Grid>
      <Grid large={3} />
    </Grid>
  )
}
