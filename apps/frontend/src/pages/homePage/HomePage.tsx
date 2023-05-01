import { BasePage } from "components/generics/basePage/BasePage";
import { Grid } from "lib";

import About from "./About";
import HomeImage from "./HomeImage";

const HomePage = () => {
  return (
    <BasePage>
      <Grid container>
        <Grid xs={12} md={6}>
          <HomeImage />
        </Grid>
        <Grid xs={12} md={6}>
          <About />
        </Grid>
      </Grid>
    </BasePage>
  );
};
export default HomePage;
