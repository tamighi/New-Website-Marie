import React from "react";

import { Paper, Grid } from "lib";
import { BasePage } from "./BasePage";

// TODO: Better display styles
// TODO: Grid should have more possibilities for responsiveness (md, xs, ...) + rename lol
export const CenteredPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <BasePage>
      <Grid container>
        <Grid md={3} xs={0} />
        <Grid xs={12} md={6} style={{ width: "100%", display: "inline-flex" }}>
          <Paper
            style={{ padding: "6px", width: "100%" }}
          >
            {children}
          </Paper>
        </Grid>
        <Grid md={3} xs={0}/>
      </Grid>
    </BasePage>
  );
};
