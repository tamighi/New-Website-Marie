import React from "react";

import { Paper, ResponsiveGrid as Grid } from "lib";
import { BasePage } from "./BasePage";

// TODO: Better display styles
// TODO: Grid should have more possibilities for responsiveness (md, xs, ...)
export const CenteredPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <BasePage>
      <Grid container>
        <Grid large={3} />
        <Grid small={12} large={6} style={{ width: "100%", display: "inline-flex" }}>
          <Paper
            style={{ padding: "6px", width: "100%" }}
          >
            {children}
          </Paper>
        </Grid>
        <Grid large={3} />
      </Grid>
    </BasePage>
  );
};
