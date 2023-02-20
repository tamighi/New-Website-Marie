import { BasePage } from "front/components/generics/basePage/BasePage"
import { ResponsiveGrid as Grid } from "lib"
import { About } from "./About"
import { HomeImage } from "./HomeImage"

export const HomePage = () => {
  return (
    <BasePage>
      <Grid container>
        <Grid small={12} large={6}>
          <HomeImage />
        </Grid>
        <Grid small={12} large={6}>
          <About />
        </Grid>
      </Grid>
    </BasePage>
  )
}
