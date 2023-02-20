import React from "react"

import { ResponsiveGrid as Grid } from "lib"
import { BasePage } from "./BasePage"

export const CenteredPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <BasePage>
      <Grid container>
        <Grid large={3} />
        <Grid small={12} large={6}>
          {children}
        </Grid>
        <Grid large={3} />
      </Grid>
    </BasePage>
  )
}
