import { Grid } from "lib"
import { AnimatedPage } from "../../utils/AnimatedPage"
import { About } from "./About"
import { HomeImage } from "./HomeImage"

import "../../../styles/Page.css"

export const HomePage = () => {
  return (
    <div className="Page">
      <AnimatedPage>
        <Grid container>
          <Grid small={12} large={6}>
            <HomeImage />
          </Grid>
          <Grid small={12} large={6}>
            <About />
          </Grid>
        </Grid>
      </AnimatedPage>
    </div>
  )
}
