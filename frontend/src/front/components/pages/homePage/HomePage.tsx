import Grid from "../../custom/Grid"
import { AnimatedPage } from "../../utils/AnimatedPage"
import { HomeImage } from "./HomeImage"

export const HomePage = () => {
  return (
    <AnimatedPage>
      <Grid container>
        <Grid xs={2}>
          <HomeImage />
        </Grid>
        <Grid>
          <HomeImage />
        </Grid>
      </Grid>
    </AnimatedPage>
  )
}
